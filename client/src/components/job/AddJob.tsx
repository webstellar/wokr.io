import { useState, Fragment } from "react";
import { storage } from "../../config/firebase.js";
import { ref, getDownloadURL } from "firebase/storage";
import { verifyCaptchaAction } from "../../utils/verify";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { useNavigate } from "react-router-dom";
import { Menu, Transition } from "@headlessui/react";
import { HiChevronDown } from "react-icons/hi";
import {
  skillLevels,
  skills,
  automationTools,
  automationLevels,
  feeTypes,
} from "../../data/data.js";

type valueProps = {
  [key: string]: string;
};

const initState: valueProps = {
  title: "",
  description: "",
  price: "",
  deliveryTime: "",
  maxRevisions: "",
};

const AddJob = () => {
  const navigate = useNavigate();
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [state, setState] = useState(initState);
  const [skill, setSkill] = useState("ADD SKILL");
  const [skillLevel, setSkillLevel] = useState("EXPERIENCE LEVEL");
  const [automation, setAutomation] = useState("ADD AUTOMATION TOOL");
  const [automationLevel, setAutomationLevel] = useState("EXPERIENCE LEVEL");
  const [feeType, setFeeType] = useState("FIXED PRICE");
  const [imageUpload, setImageUpload] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section className="mx-auto">
      <form>
        <div className="grid grid-cols-3 justify-between items-start gap-10 max-w-screen-2xl px-6 lg:px-8">
          <div className="col-span-2 w-full">
            <div className="mb-8">
              <label
                className="block text-grey-darker text-sm font-bold mb-2.5 uppercase"
                htmlFor="display-name"
              >
                Title
              </label>
              <input
                className="block w-full rounded-md border border-gray-300 focus:border-wokr-red-100 focus:outline-none focus:ring-1 focus:ring-wokr-red-100 py-2 px-3 text-gray-300 outline-wokr-red-100"
                id="title"
                name="title"
                type="text"
                placeholder="Add Your Project Title"
                onChange={handleChange}
                value={state.title}
              />
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
                className="block text-grey-darker text-sm font-bold mb-2 "
                htmlFor="description"
              >
                Description
              </label>
              <textarea
                className="block w-full rounded-md border border-gray-300 focus:border-wokr-red-100 focus:outline-none focus:ring-1 focus:ring-wokr-red-100 py-1 px-1.5 text-gray-200 outline-wokr-red-100"
                name="description"
                id="description"
                rows={10}
                placeholder="Add Your Description Here"
                onChange={handleChange}
                value={state.description}
              />
            </div>

            <div className="mb-8">
              <label
                className="block text-grey-darker text-sm font-bold mb-2 "
                htmlFor="description"
              >
                Upload Image
              </label>

              <input
                title="images"
                name="images"
                id="images"
                type="file"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  if (e.target.files != null) {
                    setImageUpload(e.target.files[0]);
                  }
                }}
              />
            </div>
          </div>

          <div>
            <div className="mb-8">
              <label
                className="block text-grey-darker text-sm font-bold mb-2"
                htmlFor="skills"
              >
                Fee Type
              </label>
              <select
                required
                title="skillLevel"
                name="skillLevel"
                className="text-black bg-white px-3 py-2 transition-all cursor-pointer hover:border-wokr-red-100 border border-gray-200 rounded-lg outline-wokr-red-100 appearance-none invalid:text-black/30 w-1/2"
                onChange={(e) => setFeeType(e.target.value)}
                value={feeType}
              >
                {feeTypes.map((feeType) => (
                  <option key={feeType.id} value={feeType.value}>
                    {feeType.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-8">
              <label
                className="block text-grey-darker text-sm font-bold mb-2.5 uppercase"
                htmlFor="display-name"
              >
                Price (staring at)
              </label>
              <input
                className="block w-1/2 rounded-md border border-gray-300 focus:border-wokr-red-100 focus:outline-none focus:ring-1 focus:ring-wokr-red-100 py-2 px-3 text-gray-300 outline-wokr-red-100"
                id="price"
                name="price"
                type="text"
                placeholder="$100"
                onChange={handleChange}
                value={state.price}
              />
            </div>

            <div className="mb-8 flex justify-between items-center gap-x-5 w-1/2">
              Cancel
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="inline-flex w-full justify-center rounded-md bg-black/20 px-4 py-2 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
                    Options
                    <HiChevronDown
                      className="-mr-1 ml-2 h-5 w-5 text-violet-200 hover:text-violet-100"
                      aria-hidden="true"
                    />
                  </Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                    <div className="px-1 py-3">
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            className={`${
                              active && "bg-wokr-red-100"
                            } group flex w-full rounded-md px-2 py-3 text-sm hover:text-white`}
                            type="submit"
                          >
                            Publish
                          </button>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            className={`${
                              active && "bg-wokr-red-100"
                            } group flex w-full rounded-md px-2 py-3 hover:text-white text-sm`}
                            type="submit"
                          >
                            Save to Draft
                          </button>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
};

export default AddJob;
