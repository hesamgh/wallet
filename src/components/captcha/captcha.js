import React, { useEffect, useRef } from "react";
import {
  LoadCanvasTemplate,
  loadCaptchaEnginge,
  validateCaptcha,
} from "react-simple-captcha";

const Captcha = React.forwardRef((props, ref) => {
  useEffect(() => {
    loadCaptchaEnginge(6, "silver", "white", "numbers"); // تعداد اعداد برای کپچا
  }, []);

  const userInputRef = useRef(null);

  // Expose a function to validate the captcha
  React.useImperativeHandle(ref, () => ({
    validate: () => {
      const user_captcha = userInputRef.current.value;
      const isValid = validateCaptcha(user_captcha);
      if (!isValid) {
        alert("کپچا نادرست است");
        userInputRef.current.value = ""; // Clear input
      }
      return isValid;
    },
  }));

  return (
    <div className="captcha-container ">
      <LoadCanvasTemplate reloadText="h" reloadColor="red" />
      <input
        className="captcha-input"
        type="number"
        ref={userInputRef}
        placeholder="عدد را وارد کنید"
      />
    </div>
  );
});
Captcha.displayName = "Captcha";
export default Captcha;
