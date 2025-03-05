import { Select } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

const LanguageSelector = () => {
  const [googleLoaded, setGoogleLoaded] = useState(false);

  useEffect(() => {
    // Check if Google Translate is loaded
    const checkGoogleTranslate = setInterval(() => {
      const googleDropdown = document.querySelector(".goog-te-combo");
      if (googleDropdown) {
        setGoogleLoaded(true);
        clearInterval(checkGoogleTranslate);
      }
    }, 1000);
  }, []);

  const handleLanguageChange = (e) => {
    const lang = e.target.value;
    const googleDropdown = document.querySelector(".goog-te-combo");

    if (googleDropdown && googleLoaded) {
      googleDropdown.value = lang;
      googleDropdown.dispatchEvent(new Event("change"));
    } else {
      console.error("Google Translate dropdown not found!");
    }
  };

  return (
    <Select
      size="sm"
      style={{ border: 0, outline: "none", background: "transparent" }}
      onChange={handleLanguageChange}
      isDisabled={!googleLoaded} // Disable dropdown until Google Translate is ready
    >
      <option value="en">English</option>
      <option value="hi">हिंदी (Hindi)</option>
      <option value="bn">বাংলা (Bengali)</option>
      <option value="ta">தமிழ் (Tamil)</option>
      <option value="te">తెలుగు (Telugu)</option>
      <option value="mr">मराठी (Marathi)</option>
      <option value="gu">ગુજરાતી (Gujarati)</option>
      <option value="pa">ਪੰਜਾਬੀ (Punjabi)</option>
      <option value="ml">മലയാളം (Malayalam)</option>
      <option value="kn">ಕನ್ನಡ (Kannada)</option>
      <option value="or">ଓଡ଼ିଆ (Odia)</option>
      <option value="as">অসমীয়া (Assamese)</option>
      <option value="ur">اردو (Urdu)</option>
      <option value="sd">سنڌي (Sindhi)</option>
      <option value="ks">کٲشُر (Kashmiri)</option>
      <option value="ne">नेपाली (Nepali)</option>
      <option value="sa">संस्कृतम् (Sanskrit)</option>
      <option value="mai">मैथिली (Maithili)</option>
      <option value="mni">মৈতৈলোন (Manipuri)</option>
    </Select>
  );
};

export default LanguageSelector;
