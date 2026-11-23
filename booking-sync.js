(function () {
  var SUPABASE_URL = "https://cgkepanpcpgmftgwqqql.supabase.co";
  var SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNna2VwYW5wY3BnbWZ0Z3dxcXFsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTA0NTA2NTAsImV4cCI6MjEwNjAyNjY1MH0.9vameERUAw2va8Qk8lAyP2APeX_SAZuwXcg1cwyHtmA";
  var lastSentKey = "";
  var lastSentAt = 0;

  function pushWebsiteBooking() {
    try {
      var nameEl = document.getElementById("patientName");
      var phoneEl = document.getElementById("patientPhone");
      var docEl = document.getElementById("doctorChoice");
      var trEl = document.getElementById("treatmentChoice");
      var dateEl = document.getElementById("preferredDate");
      var slotEl = document.getElementById("preferredSlot");
      var notesEl = document.getElementById("patientNotes");

      var name = nameEl ? nameEl.value.trim() : "";
      var rawPhone = phoneEl ? phoneEl.value.replace(/\D/g, "") : "";
      var phone = rawPhone.length > 10 ? rawPhone.slice(-10) : rawPhone;
      var preferredDate = dateEl ? dateEl.value : "";

      if (!name || phone.length < 10) return;

      var dedupKey = name + "|" + phone + "|" + preferredDate;
      var now = Date.now();
      if (dedupKey === lastSentKey && now - lastSentAt < 5000) return;
      lastSentKey = dedupKey;
      lastSentAt = now;

      var endpoint = SUPABASE_URL.replace(/\/$/, "") + "/rest/v1/rpc/submit_website_booking";
      var body = JSON.stringify({
        p_patient_name: name,
        p_mobile: phone,
        p_preferred_doctor: docEl ? docEl.value : "Either Doctor / First Available",
        p_treatment_concern: trEl ? trEl.value : "General Check-up & Consultation",
        p_preferred_date: preferredDate,
        p_preferred_slot: slotEl ? slotEl.value : "",
        p_notes: notesEl ? notesEl.value.trim() : ""
      });

      fetch(endpoint, {
        method: "POST",
        keepalive: true,
        headers: {
          "Content-Type": "application/json",
          "apikey": SUPABASE_ANON_KEY,
          "Authorization": "Bearer " + SUPABASE_ANON_KEY
        },
        body: body
      }).catch(function () {});
    } catch (e) {}
  }

  document.addEventListener("submit", function (event) {
    if (event.target && event.target.id === "bookingForm") {
      pushWebsiteBooking();
    }
  }, true);

  var origSubmit = window.submitWhatsAppBooking;
  if (typeof origSubmit === "function") {
    window.submitWhatsAppBooking = function (event) {
      pushWebsiteBooking();
      return origSubmit.call(this, event);
    };
  }
})();