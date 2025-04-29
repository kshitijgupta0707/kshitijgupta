"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Github, Linkedin, Mail, MapPin, Phone, Send, Twitter, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }


  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();

  };




  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
    // Show success message
    setResult("Sending....");
    const formData = new FormData(e.target);
    console.log(formData)

    formData.append("access_key", "19c4dc74-be84-4eee-858e-12b864d03813");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      e.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }


  }

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const contactOptions = [
    {
      icon: Mail,
      title: "Email",
      value: "kshitijgupta070704@gmail.com",
      action: "mailto:kshitijgupta070704@gmail.com",
      color: "from-blue-500 to-cyan-400",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 8851330391",
      action: "tel:8851330391",
      color: "from-green-500 to-emerald-400",
    },
    {
      icon: MessageSquare,
      title: "WhatsApp",
      value: "8851330391  ",
      action: "https://wa.me/8851330391",
      color: "from-emerald-500 to-green-400",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Gurgaon, India",
      action: "https://maps.google.com/?q=Gurgaon,+India",
      color: "from-red-500 to-orange-400",
    },
  ]

  return (
    <div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="text-center mb-16"
      >
        <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-4">
          GET IN <span className="text-primary">TOUCH</span>
        </motion.h2>
        <motion.div variants={fadeInUp} className="w-20 h-1 bg-primary mx-auto mb-8" />
        <motion.p variants={fadeInUp} className="text-muted-foreground max-w-2xl mx-auto">
          I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
        </motion.p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

          <div className="grid gap-4 mb-8">
            {contactOptions.map((option, index) => (
              <motion.div
                key={option.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <a href={option.action} target="_blank" rel="noopener noreferrer">
                  <Card className="border border-border overflow-hidden relative">
                    {/* Animated background */}
                    <div className="absolute inset-0 opacity-10 blur-xl overflow-hidden">
                      <div
                        className={`absolute -inset-1 bg-gradient-to-r ${option.color} rounded-full animate-spin-slow`}
                        style={{
                          transformOrigin: "center center",
                          animation: `spin ${12 + index * 3}s linear infinite`,
                        }}
                      ></div>
                    </div>

                    <div className="flex items-center p-4">
                      <div className={`p-3 rounded-full bg-gradient-to-r ${option.color} text-white mr-4`}>
                        <option.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold">{option.title}</h4>
                        <p className="text-muted-foreground">{option.value}</p>
                      </div>
                    </div>
                  </Card>
                </a>
              </motion.div>
            ))}
          </div>

          {/* <h3 className="text-2xl font-bold  mb-6  mt-24">Follow Me</h3> */}


        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-card backdrop-blur-sm border border-border rounded-2xl p-6 shadow-xl">
            <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="bg-background/50 border-border focus:border-primary focus:ring-primary/20"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Your Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="bg-background/50 border-border focus:border-primary focus:ring-primary/20"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Inquiry"
                  required
                  className="bg-background/50 border-border focus:border-primary focus:ring-primary/20"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Your Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Hello, I'd like to talk about..."
                  rows={5}
                  required
                  className="bg-background/50 border-border focus:border-primary focus:ring-primary/20"
                />
              </div>

              <Button type="submit" className="bg-primary hover:bg-primary/90 text-white w-full">
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>

              {result && (
                <div className="text-green-500 text-sm mt-2 m-auto text-center">
                  {result}
                </div>
              )}
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
