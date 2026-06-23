import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle, Calendar, MessageSquare, Terminal, ShieldCheck } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  company: z.string().min(2, "Company name is required"),
  email: z.string().email("Enter a valid email address"),
  phone: z.string().optional(),
  product: z.string({ required_error: "Please select a product" }),
  message: z.string().min(10, "Tell us a bit more about your use case (min 10 characters)"),
});

type FormValues = z.infer<typeof formSchema>;

const trustItems = [
  { icon: Calendar, label: "Response within 24 hours" },
  { icon: MessageSquare, label: "No sales scripts — real engineers" },
  { icon: Terminal, label: "Live product walkthrough" },
  { icon: ShieldCheck, label: "NDA available on request" },
];

export default function Demo() {
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      phone: "",
      product: "",
      message: "",
    },
  });

  function onSubmit(_values: FormValues) {
    setSubmitted(true);
  }

  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="pt-24 pb-20 relative overflow-hidden border-b border-border/40">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-primary/8 via-background to-background -z-10" />
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 font-mono text-xs tracking-widest">
              GET A DEMO
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              See CloudNoiva{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-300">
                in production.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
              Schedule a technical walkthrough with our engineering team. We'll map your
              infrastructure to the right CloudNoiva product and show you it working against real
              data — not a scripted demo.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Left: Trust signals */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="space-y-10 lg:sticky lg:top-32"
              >
                <div>
                  <h2 className="text-2xl font-bold mb-4">What to expect</h2>
                  <ul className="space-y-5">
                    {trustItems.map((t) => (
                      <li key={t.label} className="flex items-center gap-4" data-testid={`item-trust-${t.label.replace(/\s+/g, "-").toLowerCase()}`}>
                        <div className="bg-primary/10 p-2.5 rounded-lg border border-primary/20 flex-shrink-0">
                          <t.icon className="w-4 h-4 text-primary" />
                        </div>
                        <span className="text-sm font-medium text-foreground/90">{t.label}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-6 rounded-2xl border border-border/40 bg-secondary/30">
                  <p className="text-sm text-muted-foreground italic leading-relaxed">
                    "CloudNoiva's team spent 45 minutes on our first call understanding our
                    infrastructure before showing us a single slide. That told us everything we
                    needed to know."
                  </p>
                  <div className="mt-4 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-cyan-400 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                      JP
                    </div>
                    <div>
                      <p className="text-xs font-bold">João Paulo</p>
                      <p className="text-xs text-muted-foreground">CTO, Banco Meridional</p>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-4">
                    Trusted by
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {["Meridional Bank", "TechCorp Brazil", "Eurodata AG", "OmnaSoft", "Vitrine Cloud"].map((c) => (
                      <span key={c} className="text-xs px-3 py-1.5 rounded-full border border-border/60 text-muted-foreground bg-secondary/30">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="rounded-2xl border border-border bg-card p-8 md:p-10"
              >
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-col items-center text-center py-12"
                    data-testid="state-success"
                  >
                    <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mb-6">
                      <CheckCircle className="w-8 h-8 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold mb-3">Request received</h2>
                    <p className="text-muted-foreground max-w-sm leading-relaxed">
                      A CloudNoiva engineer will reach out within 24 hours to schedule your
                      technical walkthrough. Check your inbox.
                    </p>
                    <div className="mt-8 px-4 py-3 rounded-xl bg-secondary/40 border border-border/40 text-xs font-mono text-muted-foreground">
                      TICKET #{Math.random().toString(36).slice(2, 10).toUpperCase()}
                    </div>
                  </motion.div>
                ) : (
                  <>
                    <h2 className="text-xl font-bold mb-1">Request a demo</h2>
                    <p className="text-sm text-muted-foreground mb-8">
                      We'll respond within one business day.
                    </p>
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <div className="grid sm:grid-cols-2 gap-6">
                          <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Full name</FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder="Rafael Noiva"
                                    {...field}
                                    data-testid="input-name"
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="company"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Company</FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder="Acme Corp"
                                    {...field}
                                    data-testid="input-company"
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <div className="grid sm:grid-cols-2 gap-6">
                          <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Work email</FormLabel>
                                <FormControl>
                                  <Input
                                    type="email"
                                    placeholder="you@company.com"
                                    {...field}
                                    data-testid="input-email"
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>
                                  Phone{" "}
                                  <span className="text-muted-foreground font-normal">(optional)</span>
                                </FormLabel>
                                <FormControl>
                                  <Input
                                    type="tel"
                                    placeholder="+55 11 91234-5678"
                                    {...field}
                                    data-testid="input-phone"
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <FormField
                          control={form.control}
                          name="product"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Product interest</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger data-testid="select-product">
                                    <SelectValue placeholder="Select a product..." />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="noivabot-engage">NoivaBot Engage</SelectItem>
                                  <SelectItem value="noivabot-support">NoivaBot Support</SelectItem>
                                  <SelectItem value="jcl-cat">JCL Cat</SelectItem>
                                  <SelectItem value="8bit-cta">8bit CTA.in</SelectItem>
                                  <SelectItem value="zagnet">Zagnet</SelectItem>
                                  <SelectItem value="multiple">Multiple products</SelectItem>
                                  <SelectItem value="unsure">Not sure yet</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="message"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Tell us about your use case</FormLabel>
                              <FormControl>
                                <Textarea
                                  placeholder="What infrastructure are you working with? What problem are you trying to solve?"
                                  className="min-h-[120px] resize-none"
                                  {...field}
                                  data-testid="textarea-message"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <Button
                          type="submit"
                          size="lg"
                          className="w-full h-12 font-semibold"
                          disabled={form.formState.isSubmitting}
                          data-testid="button-submit-demo"
                        >
                          {form.formState.isSubmitting ? "Sending..." : "Request Demo"}
                        </Button>

                        <p className="text-xs text-center text-muted-foreground">
                          By submitting you agree to our Privacy Policy. We never sell your data.
                        </p>
                      </form>
                    </Form>
                  </>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
