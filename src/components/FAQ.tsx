import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "How does the AI handle client confidentiality?",
      answer:
        "Our AI system is built with privacy-first architecture. All data is encrypted end-to-end, and we comply with attorney-client privilege requirements. We never store sensitive client information without explicit consent.",
    },
    {
      question: "Can I customize document templates?",
      answer:
        "Yes, you can fully customize all document templates to match your firm's branding and specific requirements. Our platform includes an intuitive template editor with version control.",
    },
    {
      question: "What happens if I exceed my case limit?",
      answer:
        "We offer flexible scaling options. You can upgrade your plan at any time or purchase additional case credits as needed. We'll notify you well in advance if you're approaching your limit.",
    },
  ];

  return (
    <section className="py-16 px-4 bg-light-gray">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-navy">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-lg font-semibold text-navy">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;