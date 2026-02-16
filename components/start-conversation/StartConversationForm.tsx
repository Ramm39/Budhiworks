"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export function StartConversationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    project: "",
    projectDetails: "",
    budget: "",
    timeline: "",
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    try {
      const res = await fetch("https://formsubmit.co/ajax/buddhiworks@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company || "(not provided)",
          project: formData.project || "(not provided)",
          projectDetails: formData.projectDetails,
          budget: formData.budget || "(not provided)",
          timeline: formData.timeline || "(not provided)",
          _subject: `Start conversation: ${formData.name}`,
        }),
      });
      const data = await res.json();
      if (data.success === "true") {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", company: "", project: "", projectDetails: "", budget: "", timeline: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative w-full h-full flex items-center justify-center p-4 sm:p-6 md:p-8 lg:p-12 overflow-y-auto overflow-x-hidden">
      {/* Ambient glow behind form */}
      <div className="absolute inset-0 bg-gradient-radial from-[#4F7DF3]/5 via-transparent to-transparent opacity-50" />
      
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-4xl relative z-10 my-auto overflow-x-hidden"
      >
        {/* Glass panel container */}
        <div className="relative backdrop-blur-xl bg-black/40 rounded-2xl border border-white/10 p-6 sm:p-8 md:p-10 shadow-2xl overflow-x-hidden">
          {/* Neon blue glow on edges */}
          <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-[#4F7DF3]/20 via-[#22D3EE]/20 to-[#4F7DF3]/20 opacity-50 blur-sm" />
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/[0.02] via-transparent to-transparent" />
          
          {/* Form content */}
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-4 sm:space-y-6 relative z-10 w-full overflow-x-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="mb-6 sm:mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Start a Conversation</h2>
              <p className="text-gray-400 text-xs sm:text-sm">Tell us about your project</p>
            </div>

            {/* Row 1: Name, Email, Company - 3 columns */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name *
                </label>
                <motion.input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("name")}
                  onBlur={() => setFocusedField(null)}
                  className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none transition-all duration-300 backdrop-blur-sm text-sm"
                  placeholder="Your name"
                  whileFocus={{
                    scale: 1.01,
                  }}
                  style={{
                    boxShadow: focusedField === "name" 
                      ? "0 0 20px rgba(79, 125, 243, 0.3), inset 0 0 20px rgba(79, 125, 243, 0.1)"
                      : "none",
                    borderColor: focusedField === "name" ? "rgba(79, 125, 243, 0.5)" : "rgba(255, 255, 255, 0.1)",
                  }}
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email *
                </label>
                <motion.input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("email")}
                  onBlur={() => setFocusedField(null)}
                  className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none transition-all duration-300 backdrop-blur-sm text-sm"
                  placeholder="your.email@example.com"
                  whileFocus={{
                    scale: 1.01,
                  }}
                  style={{
                    boxShadow: focusedField === "email" 
                      ? "0 0 20px rgba(79, 125, 243, 0.3), inset 0 0 20px rgba(79, 125, 243, 0.1)"
                      : "none",
                    borderColor: focusedField === "email" ? "rgba(79, 125, 243, 0.5)" : "rgba(255, 255, 255, 0.1)",
                  }}
                />
              </div>

              {/* Company */}
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                  Company <span className="text-gray-500 font-normal text-xs">(optional)</span>
                </label>
                <motion.input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("company")}
                  onBlur={() => setFocusedField(null)}
                  className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none transition-all duration-300 backdrop-blur-sm text-sm"
                  placeholder="Your company"
                  whileFocus={{
                    scale: 1.01,
                  }}
                  style={{
                    boxShadow: focusedField === "company" 
                      ? "0 0 20px rgba(79, 125, 243, 0.3), inset 0 0 20px rgba(79, 125, 243, 0.1)"
                      : "none",
                    borderColor: focusedField === "company" ? "rgba(79, 125, 243, 0.5)" : "rgba(255, 255, 255, 0.1)",
                  }}
                />
              </div>
            </div>

            {/* Row 2: Project, Budget, Timeline - 3 columns */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full overflow-x-hidden">
              {/* Project */}
              <div className="w-full min-w-0 overflow-x-hidden">
                <label htmlFor="project" className="block text-sm font-medium text-gray-300 mb-2">
                  Project Type <span className="text-gray-500 font-normal text-xs">(optional)</span>
                </label>
                <motion.select
                  id="project"
                  name="project"
                  value={formData.project}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("project")}
                  onBlur={() => setFocusedField(null)}
                  className="w-full max-w-full px-4 py-3 bg-black/30 border border-white/10 rounded-xl text-white focus:outline-none transition-all duration-300 backdrop-blur-sm appearance-none cursor-pointer text-sm overflow-hidden"
                  whileFocus={{
                    scale: 1.01,
                  }}
                  style={{
                    boxShadow: focusedField === "project" 
                      ? "0 0 20px rgba(79, 125, 243, 0.3), inset 0 0 20px rgba(79, 125, 243, 0.1)"
                      : "none",
                    borderColor: focusedField === "project" ? "rgba(79, 125, 243, 0.5)" : "rgba(255, 255, 255, 0.1)",
                    maxWidth: '100%',
                    wordWrap: 'break-word',
                    overflowWrap: 'break-word',
                  }}
                >
                  <option value="" className="bg-black text-white" style={{ maxWidth: '100%' }}>Select type</option>
                  <option value="web-app" className="bg-black text-white" style={{ maxWidth: '100%' }}>Web Application</option>
                  <option value="website" className="bg-black text-white" style={{ maxWidth: '100%' }}>Website</option>
                  <option value="mobile-app" className="bg-black text-white" style={{ maxWidth: '100%' }}>Mobile App</option>
                  <option value="custom-software" className="bg-black text-white" style={{ maxWidth: '100%' }}>Custom Software</option>
                  <option value="ui-ux" className="bg-black text-white" style={{ maxWidth: '100%' }}>UI/UX Design</option>
                  <option value="other" className="bg-black text-white" style={{ maxWidth: '100%' }}>Other</option>
                </motion.select>
              </div>

              {/* Budget */}
              <div className="w-full min-w-0 overflow-x-hidden">
                <label htmlFor="budget" className="block text-sm font-medium text-gray-300 mb-2">
                  Budget <span className="text-gray-500 font-normal text-xs">(optional)</span>
                </label>
                <motion.select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("budget")}
                  onBlur={() => setFocusedField(null)}
                  className="w-full max-w-full px-4 py-3 bg-black/30 border border-white/10 rounded-xl text-white focus:outline-none transition-all duration-300 backdrop-blur-sm appearance-none cursor-pointer text-sm overflow-hidden"
                  whileFocus={{
                    scale: 1.01,
                  }}
                  style={{
                    boxShadow: focusedField === "budget" 
                      ? "0 0 20px rgba(79, 125, 243, 0.3), inset 0 0 20px rgba(79, 125, 243, 0.1)"
                      : "none",
                    borderColor: focusedField === "budget" ? "rgba(79, 125, 243, 0.5)" : "rgba(255, 255, 255, 0.1)",
                    maxWidth: '100%',
                    wordWrap: 'break-word',
                    overflowWrap: 'break-word',
                  }}
                >
                  <option value="" className="bg-black text-white" style={{ maxWidth: '100%' }}>Select budget</option>
                  <option value="under-25k" className="bg-black text-white" style={{ maxWidth: '100%' }}>Under $25,000</option>
                  <option value="25k-50k" className="bg-black text-white" style={{ maxWidth: '100%' }}>$25,000 - $50,000</option>
                  <option value="50k-100k" className="bg-black text-white" style={{ maxWidth: '100%' }}>$50,000 - $100,000</option>
                  <option value="100k-250k" className="bg-black text-white" style={{ maxWidth: '100%' }}>$100,000 - $250,000</option>
                  <option value="over-250k" className="bg-black text-white" style={{ maxWidth: '100%' }}>Over $250,000</option>
                </motion.select>
              </div>

              {/* Timeline */}
              <div className="w-full min-w-0 overflow-x-hidden">
                <label htmlFor="timeline" className="block text-sm font-medium text-gray-300 mb-2">
                  Timeline <span className="text-gray-500 font-normal text-xs">(optional)</span>
                </label>
                <motion.select
                  id="timeline"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("timeline")}
                  onBlur={() => setFocusedField(null)}
                  className="w-full max-w-full px-4 py-3 bg-black/30 border border-white/10 rounded-xl text-white focus:outline-none transition-all duration-300 backdrop-blur-sm appearance-none cursor-pointer text-sm overflow-hidden"
                  whileFocus={{
                    scale: 1.01,
                  }}
                  style={{
                    boxShadow: focusedField === "timeline" 
                      ? "0 0 20px rgba(79, 125, 243, 0.3), inset 0 0 20px rgba(79, 125, 243, 0.1)"
                      : "none",
                    borderColor: focusedField === "timeline" ? "rgba(79, 125, 243, 0.5)" : "rgba(255, 255, 255, 0.1)",
                    maxWidth: '100%',
                    wordWrap: 'break-word',
                    overflowWrap: 'break-word',
                  }}
                >
                  <option value="" className="bg-black text-white" style={{ maxWidth: '100%' }}>Select timeline</option>
                  <option value="asap" className="bg-black text-white" style={{ maxWidth: '100%' }}>ASAP</option>
                  <option value="1-3months" className="bg-black text-white" style={{ maxWidth: '100%' }}>1-3 months</option>
                  <option value="3-6months" className="bg-black text-white" style={{ maxWidth: '100%' }}>3-6 months</option>
                  <option value="6-12months" className="bg-black text-white" style={{ maxWidth: '100%' }}>6-12 months</option>
                  <option value="12plus" className="bg-black text-white" style={{ maxWidth: '100%' }}>12+ months</option>
                  <option value="flexible" className="bg-black text-white" style={{ maxWidth: '100%' }}>Flexible</option>
                </motion.select>
              </div>
            </div>

            {/* Row 3: Project Details - Full width */}
            <div>
              <label htmlFor="projectDetails" className="block text-sm font-medium text-gray-300 mb-2">
                Project Details *
              </label>
              <motion.textarea
                id="projectDetails"
                name="projectDetails"
                required
                rows={4}
                value={formData.projectDetails}
                onChange={handleChange}
                onFocus={() => setFocusedField("projectDetails")}
                onBlur={() => setFocusedField(null)}
                className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none transition-all duration-300 backdrop-blur-sm resize-none text-sm"
                placeholder="Tell us about your project..."
                whileFocus={{
                  scale: 1.01,
                }}
                style={{
                  boxShadow: focusedField === "projectDetails" 
                    ? "0 0 20px rgba(79, 125, 243, 0.3), inset 0 0 20px rgba(79, 125, 243, 0.1)"
                    : "none",
                  borderColor: focusedField === "projectDetails" ? "rgba(79, 125, 243, 0.5)" : "rgba(255, 255, 255, 0.1)",
                }}
              />
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="relative w-full px-8 py-4 bg-gradient-to-r from-[#4F7DF3] via-[#22D3EE] to-[#4F7DF3] text-white font-semibold rounded-xl overflow-hidden group disabled:opacity-70 disabled:cursor-not-allowed"
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 0 30px rgba(79, 125, 243, 0.5), 0 0 60px rgba(34, 211, 238, 0.3)",
                }}
                whileTap={{
                  scale: 0.98,
                }}
                transition={{
                  duration: 0.3,
                  ease: "easeOut",
                }}
              >
                {/* Animated gradient background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#4F7DF3] via-[#22D3EE] to-[#4F7DF3] opacity-100"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{
                    backgroundSize: "200% 100%",
                  }}
                />

                {/* Shimmer overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{
                    x: ["-100%", "100%"],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 1,
                    ease: "linear",
                  }}
                />

                {/* Animated border glow */}
                <motion.div
                  className="absolute -inset-[2px] rounded-xl opacity-75"
                  style={{
                    background: "linear-gradient(135deg, #4F7DF3, #22D3EE, #4F7DF3)",
                    filter: "blur(8px)",
                  }}
                  animate={{
                    opacity: [0.5, 0.9, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                {/* Button text */}
                <span className="relative z-10 text-lg">{isSubmitting ? "Sending…" : "Send Message"}</span>
              </motion.button>
              
              {submitStatus === "success" && (
                <p className="mt-4 text-sm text-green-400 text-center">
                  Message sent. We&apos;ll get back to you within 24 hours.
                </p>
              )}
              {submitStatus === "error" && (
                <p className="mt-4 text-sm text-red-400 text-center">
                  Something went wrong. Please try again or email buddhiworks@gmail.com.
                </p>
              )}
              {submitStatus === "idle" && (
                <p className="mt-4 text-sm text-gray-400 text-center">
                  We&apos;ll get back to you within 24 hours
                </p>
              )}
            </div>
          </motion.form>
        </div>
      </motion.div>
    </div>
  );
}
