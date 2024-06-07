import React, { useState } from "react";
import { Alert, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { useForm } from "react-hook-form";

import "./Career.css";

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    // setValue,
    reset,
  } = useForm();

  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);
    const formData = {
      name: data["First name"],
      email: data.Email,
      contact_no: data["Mobile number"],
      current_location: data["Current Location"],
      role: data.Role,
      resume_link: data["Resume Link"],
    };

    try {
      const response = await fetch(
        "https://anti-backend.onrender.com/applyJobProfile",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setSuccessMessage("Form submitted successfully!");
        console.log("Data sent successfully");
        reset(); // Clear the form data
      } else {
        console.error("Error sending data");
      }
    } catch (error) {
      console.error("Error sending data", error);
    }

    setLoading(false);
  };

  return (
    <div className="container">
      <div className="text-container">
        <h1>Open Positions</h1>
        <p>
          We at Anti AI are looking for curious minds from a wide range of
          disciplines and backgrounds. You are an ideal candidate if:
        </p>
        <ul>
          <li>Passionate about technology and its impact on society.</li>
          <li>
            Strong problem-solving skills and ability to think creatively.
          </li>
          <li>Not bound by any technical stack.</li>
          <li>Belive Hacking is a beautiful art.</li>
          <li>Are a Nerd.</li>
          <li>
            Familiar with either Machine learning/Artificial Intelligence or
            Full Stack Web Devlopment.
          </li>
          <li>You love solving challenges, problems.</li>
        </ul>
      </div>
      <div className="form-container">
        <Spin
          spinning={loading}
          indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />}
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              placeholder="First name"
              className={errors["First name"] ? "error-input" : ""}
              {...register("First name", { required: true, maxLength: 80 })}
            />

            <input
              type="text"
              placeholder="Email"
              className={errors.Email ? "error-input" : ""}
              {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
            />

            <input
              type="tel"
              placeholder="Mobile number"
              className={errors["Mobile number"] ? "error-input" : ""}
              {...register("Mobile number", {
                required: true,
                minLength: 6,
                maxLength: 12,
              })}
            />

            <input
              type="url"
              placeholder="Resume Link (Only Gdrive Links allowed.)"
              className={errors["Resume Link"] ? "error-input" : ""}
              {...register("Resume Link", { required: true })}
            />

            <input
              type="text"
              placeholder="Current Location"
              className={errors["Current Location"] ? "error-input" : ""}
              {...register("Current Location", { required: true })}
            />

            <select
              className={errors.Role ? "error-input" : ""}
              {...register("Role", { required: true })}
            >
              <option value="">Select Role...</option>
              <option value="Backend Developer">Backend Developer</option>
              <option value="AI/ML Developer">AI/ML Developer</option>
              <option value="Frontend Developer">Frontend Developer</option>
              <option value="Full Stack Developer">Full Stack Developer</option>
              <option value="Human Resources">Human Resources</option>
              <option value="Digital Marketing">
                Digital Marketing/Social Media/option
              </option>
              <option value="Finance/Accounting">Finance/Accounting</option>
              <option value="Content Creation">Content Creation</option>
            </select>

            <label>
              <input
                type="checkbox"
                className={errors.Terms ? "error-input" : ""}
                {...register("Terms", { required: true })}
              />
              I accept the terms and conditions
            </label>

            <input type="submit" />
            {successMessage && (
              <Alert
                message="Your Application is Submitted Successfully."
                description="Our team members will contact you soon."
                type="success"
                showIcon
              />
            )}
          </form>
        </Spin>
      </div>
    </div>
  );
}
