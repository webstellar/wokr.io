import { useState, useCallback } from "react";
import {
  languages,
  languageLevels,
  skillLevels,
  skills,
  automationTools,
  automationLevels,
} from "../../data/data";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { verifyCaptchaAction } from "../../utils/verify";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

type valueProps = {
  [key: string]: string;
};

const initState: valueProps = {
  displayName: "",
  email: "",
  description: "",
  universityCollege: "",
  universityCountry: "",
  eductionTitle: "",
  educationMajor: "",
  graduationYear: "",
};

const EditProfile = () => {
  const navigate = useNavigate();
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [state, setState] = useState(initState);
  const [language, setLanguage] = useState("ADD LANGUAGE");
  const [languageLevel, setLanguageLevel] = useState("LANGUAGE LEVEL");
  const [skill, setSkill] = useState("ADD SKILL");
  const [skillLevel, setSkillLevel] = useState("EXPERIENCE LEVEL");
  const [automation, setAutomation] = useState("");
  const [automationLevel, setAutomationLevel] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) =>
    setState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      setLoading(true);
      const token = (await executeRecaptcha?.("profile_setup")) ?? ""; // Provide a default value of an empty string
      const verified = await verifyCaptchaAction(token);

      if (verified) {
        try {
          console.log(state);
          toast("Thanks for setting up your profile", {
            hideProgressBar: true,
            autoClose: 2000,
            type: "success",
          });
          navigate("/profile");
        } catch (error) {
          console.log(error);
        }
      }
    },

    [executeRecaptcha, state, navigate]
  );
  return (
    <section className="mx-auto">
      <div className="grid grid-cols-1 justify-start items-center mx-auto max-w-screen-2xl px-6 lg:px-8">
        <h2 className="my-12 text-3xl font-bold text-gray-900">Edit Profile</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-8 w-full grid grid-cols-2 justify-around items-center gap-x-2">
            <div>
              <label
                className="block text-grey-darker text-sm font-bold mb-2 uppercase"
                htmlFor="display-name"
              >
                Display Name
              </label>
              <input
                className="block w-full rounded-md border border-gray-300 focus:border-wokr-red-100 focus:outline-none focus:ring-1 focus:ring-wokr-red-100 py-1 px-1.5 text-gray-500"
                id="displayName"
                name="displayName"
                type="text"
                placeholder="JOHN_WICK"
                onChange={handleChange}
                value={state.displayName}
              />
            </div>

            <div>
              <label
                className="block uppercase text-grey-darker text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="block w-full rounded-md border border-gray-300 focus:border-wokr-red-100focus:outline-none focus:ring-1 focus:ring-wokr-red-100 py-1 px-1.5 text-gray-500"
                id="email"
                type="email"
                name="email"
                placeholder="Your Email"
                onChange={handleChange}
                value={state.email}
              />
            </div>
          </div>

          <div className="mb-8 w-full grid grid-cols-2 justify-around items-center gap-x-2">
            <div></div>

            <div>Input</div>
          </div>

          <div className="mb-4">
            <label
              className="block text-grey-darker text-sm font-bold mb-2"
              htmlFor="description"
            >
              Description
            </label>
            <textarea
              className="block w-full rounded-md border border-gray-300 focus:border-wokr-red-100focus:outline-none focus:ring-1 focus:ring-wokr-red-100 py-1 px-1.5 text-gray-500"
              name="description"
              id="description"
              rows={10}
              placeholder="Share with us your hobbies, any extra qualifications, or anything else you wish to provide."
              onChange={handleChange}
              value={state.description}
            />
          </div>
          <div className="mb-8 w-full">
            <div>
              <label
                className="block text-grey-darker text-sm font-bold mb-2"
                htmlFor="language"
              >
                Languages
              </label>

              <div className="grid grid-cols-2 justify-around items-center w-full gap-x-2 mb-2">
                <select
                  required
                  title="language"
                  name="language"
                  className="text-black bg-white px-3 py-2 transition-all cursor-pointer hover:border-wokr-red-100 border border-gray-200 rounded-lg outline-wokr-red-100 appearance-none invalid:text-black/30"
                  onChange={(e) => setLanguage(e.target.value)}
                  value={language}
                >
                  {languages.map((language, i) => (
                    <option key={i} value={language.value}>
                      {language.label}
                    </option>
                  ))}
                </select>

                <select
                  required
                  title="languageLevel"
                  name="languageLevel"
                  className="text-black bg-white px-3 py-2 transition-all cursor-pointer hover:border-wokr-red-100 border border-gray-200 rounded-lg outline-wokr-red-100 appearance-none invalid:text-black/30"
                  onChange={(e) => setLanguageLevel(e.target.value)}
                  value={languageLevel}
                >
                  {languageLevels.map((languageLevel, i) => (
                    <option key={i} value={languageLevel.value}>
                      {languageLevel.label}
                    </option>
                  ))}
                </select>
              </div>

              <p className="text-sm font-pangram-light">
                {`${language} - ${languageLevel}`}
              </p>
            </div>
          </div>
          <div className="mb-8">
            <label
              className="block text-grey-darker text-sm font-bold mb-2"
              htmlFor="skills"
            >
              Skills
            </label>

            <div className="grid grid-cols-2 justify-around items-center w-full gap-x-2 mb-2">
              <select
                required
                title="skill"
                name="skill"
                className="text-black bg-white px-3 py-2 transition-all cursor-pointer hover:border-wokr-red-100 border border-gray-200 rounded-lg outline-wokr-red-100 appearance-none invalid:text-black/30"
                onChange={(e) => setSkill(e.target.value)}
                value={skill}
              >
                {skills.map((skill, i) => (
                  <option key={i} value={skill.value}>
                    {skill.label}
                  </option>
                ))}
              </select>

              <select
                required
                title="skillLevel"
                name="skillLevel"
                className="text-black bg-white px-3 py-2 transition-all cursor-pointer hover:border-wokr-red-100 border border-gray-200 rounded-lg outline-wokr-red-100 appearance-none invalid:text-black/30"
                onChange={(e) => setSkillLevel(e.target.value)}
                value={skillLevel}
              >
                {skillLevels.map((skillLevel, i) => (
                  <option key={i} value={skillLevel.value}>
                    {skillLevel.label}
                  </option>
                ))}
              </select>
            </div>

            <p className="text-sm font-pangram-light">
              {`${skill} - ${skillLevel}`}
            </p>
          </div>
          <div className="mb-8">
            <label
              className="block text-grey-darker text-sm font-bold mb-2"
              htmlFor="automationTools"
            >
              Automation Tools
            </label>

            <div className="grid grid-cols-2 justify-around items-center w-full gap-x-2 mb-2">
              <select
                required
                title="automationTools"
                name="automationTools"
                className="text-black bg-white px-3 py-2 transition-all cursor-pointer hover:border-wokr-red-100 border border-gray-200 rounded-lg outline-wokr-red-100 appearance-none invalid:text-black/30"
                onChange={(e) => setAutomation(e.target.value)}
                value={automation}
              >
                {automationTools.map((tool, i) => (
                  <option key={i} value={tool.value}>
                    {tool.label}
                  </option>
                ))}
              </select>

              <select
                required
                title="automationLevel"
                name="automationLevel"
                className="text-black bg-white px-3 py-2 transition-all cursor-pointer hover:border-wokr-red-100 border border-gray-200 rounded-lg outline-wokr-red-100 appearance-none invalid:text-black/30"
                onChange={(e) => setAutomationLevel(e.target.value)}
                value={automationLevel}
              >
                {automationLevels.map((automationLevel, i) => (
                  <option key={i} value={automationLevel.value}>
                    {automationLevel.label}
                  </option>
                ))}
              </select>
            </div>

            <p className="text-sm font-pangram-light">
              {`${automation} - ${automationLevel}`}
            </p>
          </div>
          <div className="mb-8">
            <label
              className="block text-grey-darker text-sm font-bold mb-2"
              htmlFor="education"
            >
              Education
            </label>
            <input
              className="block rounded-md border border-gray-300 focus:border-wokr-red-100 focus:outline-none focus:ring-1 focus:ring-wokr-red-100 py-1 px-1.5 text-gray-500 w-full mb-4"
              id="universityCountry"
              name="universityCountry"
              type="text"
              placeholder="COUNTRY OF COLLEAGE/UNIVERSITY"
              onChange={handleChange}
              value={state.universityCountry}
            />
            <input
              className="block rounded-md border border-gray-300 focus:border-wokr-red-100 focus:outline-none focus:ring-1 focus:ring-wokr-red-100 py-1 px-1.5 text-gray-500 w-full mb-4"
              id="universityCollege"
              type="text"
              name="universityCollege"
              placeholder="COLLEGE/UNIVERSITY NAME"
              onChange={handleChange}
              value={state.universityCollege}
            />
            <div className="grid grid-cols-2 justify-around items-center w-full gap-x-2 mb-4">
              <input
                className="block rounded-md border border-gray-300 focus:border-wokr-red-100 focus:outline-none focus:ring-1 focus:ring-wokr-red-100 py-1 px-1.5 text-gray-500 w-full"
                id="educationTitle"
                name="educationTitle"
                type="text"
                placeholder="TITLE"
                onChange={handleChange}
                value={state.educationTitle}
              />

              <input
                className="block rounded-md border border-gray-300 focus:border-wokr-red-100 focus:outline-none focus:ring-1 focus:ring-wokr-red-100 py-1 px-1.5 text-gray-500 w-full"
                id="educationMajor"
                type="text"
                placeholder="MAJOR"
                onChange={handleChange}
                name="educationMajor"
                value={state.educationMajor}
              />
            </div>
            <input
              className="block rounded-md border border-gray-300 focus:border-wokr-red-100 focus:outline-none focus:ring-1 focus:ring-wokr-red-100 py-1 px-1.5 text-gray-500 w-full mb-4"
              id="graduationYear"
              type="text"
              placeholder="YEAR OF GRADUATION"
              name="graduationYear"
              onChange={handleChange}
              value={state.graduationYear}
            />

            <p className="text-sm font-pangram-light">{state.educationTitle}</p>
            <p className="text-sm font-pangram-light">
              {`${state.universityCollege}, ${state.universityCountry}, Graduated ${state.graduationYear}`}
            </p>
          </div>
          {/* Add more form fields as necessary */}
          <div className="flex items-center justify-between">
            <button
              className="bg-red-500 hover:bg-wokr-red-200 text-white font-bold py-3 px-4 rounded w-1/4"
              type="button"
            >
              {loading ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M12 2C6.477 2 2 6.477 2 12c0 1.656.337 3.223 0.943 4.65C3.65 16.73 4.26 17 5 17c.74 0 1.35-.27 1.057-.35C7.663 15.223 8 13.656 8 12c0-2.21-.895-4.21-2.343-5.657C4.105 4.895 2.105 4 0 4"
                    ></path>
                  </svg>
                  Saving changes...
                </>
              ) : (
                "Save changes"
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default EditProfile;
