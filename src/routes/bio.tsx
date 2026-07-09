import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Loader2, Send } from "lucide-react";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { sendContactEmail } from "@/lib/email";

export const Route = createFileRoute("/bio")({
  head: () => ({
    meta: [
      { title: "Bio | chitswa" },
      { name: "description", content: "About Malvin Chitswamatombo." },
      { property: "og:title", content: "Bio | chitswa" },
      { property: "og:description", content: "About Malvin Chitswamatombo." },
    ],
    links: [{ rel: "canonical", href: "/bio" }],
  }),
  component: Bio,
});

const formSchema = z.object({
  name: z.string().min(1, "Please tell me your name"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Please write a message (at least 10 characters)"),
});

type FormData = z.infer<typeof formSchema>;

function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      await sendContactEmail({ data });
      toast.success("Message sent! I'll get back to you as soon as possible.");
      reset();
    } catch (error: any) {
      console.error(error);
      toast.error(error.message || "Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 max-w-xl">
      <div className="space-y-2">
        <Label htmlFor="name" className="text-[11px] tracking-[0.15em] uppercase text-muted-foreground">
          Name
        </Label>
        <Input
          id="name"
          placeholder="Your name"
          {...register("name")}
          className="bg-background border-border/60 focus-visible:ring-stone-500 font-light"
          disabled={isSubmitting}
        />
        {errors.name && (
          <p className="text-xs text-destructive font-light tracking-wide">{errors.name.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="email" className="text-[11px] tracking-[0.15em] uppercase text-muted-foreground">
          Email
        </Label>
        <Input
          id="email"
          type="email"
          placeholder="your.email@example.com"
          {...register("email")}
          className="bg-background border-border/60 focus-visible:ring-stone-500 font-light"
          disabled={isSubmitting}
        />
        {errors.email && (
          <p className="text-xs text-destructive font-light tracking-wide">{errors.email.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" className="text-[11px] tracking-[0.15em] uppercase text-muted-foreground">
          Message
        </Label>
        <Textarea
          id="message"
          placeholder="What's on your mind?"
          rows={5}
          {...register("message")}
          className="bg-background border-border/60 focus-visible:ring-stone-500 font-light resize-none min-h-[120px]"
          disabled={isSubmitting}
        />
        {errors.message && (
          <p className="text-xs text-destructive font-light tracking-wide">{errors.message.message}</p>
        )}
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full sm:w-auto bg-foreground text-background hover:bg-foreground/90 transition-colors font-light text-xs tracking-[0.15em] uppercase h-10 px-6 cursor-pointer"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="mr-2 h-3.5 w-3.5" />
            Send Message
          </>
        )}
      </Button>
    </form>
  );
}

function Bio() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <div className="max-w-3xl mx-auto px-6 md:px-10 pt-32 md:pt-40 pb-24 fade-in">
        <p className="text-[11px] tracking-[0.25em] uppercase text-muted-foreground mb-8">
          Bio
        </p>
        <h1 className="text-4xl md:text-6xl font-light tracking-tight text-stone-deep leading-tight">
          Malvin Chitswamatombo.
        </h1>

        <div className="mt-16 space-y-8 text-lg font-light leading-relaxed text-foreground/85">
          <p>
            I build software to solve everyday frustrations. Most of my projects start
            because a tool I need doesn't exist, a workflow is too slow, or some useful
            public data is buried and hard to access.
          </p>
          <p>
            Currently based in Lisbon, still learning so i do a little bit of everything right now.
          </p>
          <p>
            If you want to collaborate on a project or share an interesting problem, or just want to say hi,
            hit me up <a href="mailto:malvin@chitswa.com" className="link-quiet border-b border-foreground/40 pb-0.5 hover:text-foreground transition-colors">malvin@chitswa.com</a>.
          </p>
        </div>

        <div className="mt-20 border-t border-border/40 pt-16">
          <h2 className="text-[11px] tracking-[0.25em] uppercase text-muted-foreground mb-8">
            Send a Message
          </h2>
          <ContactForm />
        </div>
      </div>
      <SiteFooter />
    </div>
  );
}

