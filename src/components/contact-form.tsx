"use client";

import { BiChevronDown } from "react-icons/bi";
import { motion } from "framer-motion";
import HandleSendToWeb3Forms from "@/features/contact-form/handleSubmit";
import React from "react";
import { useFormik } from "formik";
import { validationContactSchema } from "@/features/contact-form/schemas/validationContactSchema";
import { InputField } from "@/features/contact-form/inputField";
import { toast } from "react-toastify";

export default function ContactSection() {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      message: "",
    },
    validationSchema: validationContactSchema,
    onSubmit: async (
      { firstName, lastName, email, phoneNumber, message },
      { resetForm },
    ) => {
      await HandleSendToWeb3Forms({
        firstName,
        lastName,
        email,
        phoneNumber,
        message,
      });
      resetForm(); // ✅ Sekarang aman dan valid di TypeScript
    },
  });

  return (
    <section
      id="contact"
      className="relative isolate bg-white px-6 transition-colors duration-300 sm:py-24 lg:px-8 dark:bg-slate-950"
    >
      {/* Background Gradient */}
      {/* Heading with Motion */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto max-w-2xl text-center"
      >
        <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl dark:text-slate-100">
          Contact Me
        </h2>
        <p className="mt-2 text-lg text-gray-600 dark:text-slate-400">
          Let`s discuss your project or collaboration ideas.
        </p>
      </motion.div>
      {/* Form with Motion */}
      <motion.form
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
        className="mx-auto mt-16 max-w-xl rounded-xl bg-white p-8 shadow-lg sm:mt-20 dark:bg-slate-900"
        onSubmit={formik.handleSubmit}
      >
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          {/* First Name */}
          <InputField
            label="First Name"
            id="first-name"
            name="firstName"
            type="text"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            error={formik.errors.firstName}
            touched={formik.touched.firstName}
          />
          {/* Last Name */}
          <InputField
            label="Last Name"
            id="last-name"
            name="lastName"
            type="text"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            error={formik.errors.lastName}
            touched={formik.touched.lastName}
          />
          {/* Email */}
          <InputField
            label="Email"
            id="email"
            type="email"
            className="sm:col-span-2"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.errors.email}
            touched={formik.touched.email}
          />
          {/* Phone Number */}
          <div className="sm:col-span-2">
            <label className="block text-sm font-semibold text-gray-900 dark:text-slate-100">
              Phone Number
            </label>
            <div className="mt-2.5 flex rounded-md bg-white outline-1 outline-gray-300 focus-within:outline-2 focus-within:outline-indigo-600 dark:bg-slate-800 dark:outline-slate-700">
              <div className="relative">
                <select
                  id="country"
                  name="country"
                  className="appearance-none bg-transparent py-2 pr-7 pl-3.5 text-base text-slate-500 focus:outline-none dark:text-slate-300"
                >
                  <option>ID</option>
                  <option>SG</option>
                  <option>US</option>
                </select>
                <BiChevronDown className="absolute top-1/2 right-2 size-5 -translate-y-1/2 text-gray-500" />
              </div>
              <input
                type="text"
                placeholder="812-345-6789"
                className="block flex-1 bg-transparent px-3 py-2 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none dark:text-slate-100"
                name="phoneNumber"
                id="phoneNumber"
                value={formik.values.phoneNumber}
                onChange={formik.handleChange}
              />
            </div>
            {formik.errors.phoneNumber && formik.touched.phoneNumber ? (
              <div className="text-red-500">{formik.errors.phoneNumber}</div>
            ) : null}
          </div>
          {/* Message */}
          <div className="sm:col-span-2">
            <label className="block text-sm font-semibold text-gray-900 dark:text-slate-100">
              Message
            </label>
            <textarea
              rows={4}
              className="mt-2.5 block w-full rounded-md bg-white px-3.5 py-2 text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 dark:bg-slate-800 dark:text-slate-100 dark:outline-slate-700"
              name="message"
              id="message"
              value={formik.values.message}
              onChange={formik.handleChange}
            />
            {formik.errors.message && formik.touched.message ? (
              <div className="text-red-500">{formik.errors.message}</div>
            ) : null}
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-10">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full rounded-md bg-indigo-600 px-4 py-3 font-semibold text-white hover:bg-indigo-500 focus:ring-2 focus:ring-indigo-600 focus:outline-none"
          >
            Let`s Talk
          </motion.button>
        </div>
      </motion.form>
    </section>
  );
}
