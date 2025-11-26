import { ArrowLeft, HelpCircle, MessageCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';

interface HelpPageProps {
  onBack: () => void;
}

export function HelpPage({ onBack }: HelpPageProps) {
  const faqs = [
    {
      question: "Why can't I see Instacart prices?",
      answer: "Instacart doesn't provide a public price feed. When you add items to your cart, Quiki creates a shopping list link that opens on Instacart where you'll see final prices and complete your purchase. This approach complies with Instacart's Inspire Digital Platform (IDP) policies."
    },
    {
      question: "How does Quiki find the best prices?",
      answer: "Quiki aggregates product data from Walmart's affiliate feeds and Amazon's Product Advertising API. We compare prices in real-time and show you the lowest available price. Our cart planner automatically splits your items across providers to minimize your total cost."
    },
    {
      question: "What does 'estimated total' mean?",
      answer: "The totals shown in your cart are estimates based on current prices from our partner stores. Final prices are confirmed when you checkout on each provider's website. This is because prices can change, and additional fees (like delivery or taxes) are calculated at checkout."
    },
    {
      question: "Can I track my orders in Quiki?",
      answer: "Not in this MVP version. Orders happen on the provider's platforms (Walmart, Amazon, or Instacart). You'll need to track your orders through each provider's website or app. We may add order tracking in future versions where provider APIs allow it."
    },
    {
      question: "What does SNAP Eligible mean?",
      answer: "Items marked 'SNAP Eligible' may qualify for SNAP/EBT payment on Instacart. Final SNAP eligibility is confirmed during checkout on Instacart. Walmart and Amazon have their own SNAP programs with different eligible items."
    },
    {
      question: "How do affiliate partnerships work?",
      answer: "Quiki earns commissions when you purchase through our links to Walmart and Amazon. As an Amazon Associate, we earn from qualifying purchases. This helps us keep Quiki free. Your prices are the same whether you use Quiki or shop directly."
    },
    {
      question: "Why do Amazon prices say 'subject to change'?",
      answer: "Amazon's program policies require us to display prices with a timestamp and note that they may change. We fetch prices in real-time using Amazon's Product Advertising API, but they can fluctuate. Always check the current price on Amazon before purchasing."
    },
    {
      question: "Can I link my provider accounts?",
      answer: "Not in the MVP version. Quiki creates a shopping plan and provides links to checkout on each provider's site. You'll sign in to your existing accounts (Walmart, Amazon, Instacart) when you're ready to complete your purchase."
    },
    {
      question: "How are products matched across stores?",
      answer: "We use UPC/EAN codes, brand names, and product size to identify the same product across different providers. This lets us show you accurate price comparisons and create unified product pages."
    },
    {
      question: "Can I save my shopping lists?",
      answer: "Yes! Use the 'Lists' tab to save and manage multiple shopping lists. You can reload saved lists to your cart anytime. For Instacart items, we'll regenerate the shopping list link when needed."
    }
  ];

  return (
    <div className="pb-20 min-h-screen bg-background">
      {/* Header */}
      <div className="sticky top-0 bg-card border-b border-border z-10">
        <div className="flex items-center gap-3 p-4">
          <button onClick={onBack}>
            <ArrowLeft className="w-6 h-6" />
          </button>
          <div>
            <h2>Help & FAQ</h2>
          </div>
        </div>
      </div>

      <div className="p-4">
        {/* Quick Help */}
        <div className="bg-primary text-primary-foreground rounded-lg p-4 mb-6">
          <div className="flex items-start gap-3">
            <HelpCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="mb-2">How Quiki Works</h3>
              <p className="text-sm opacity-90">
                Quiki helps you find the best grocery deals by comparing prices across Walmart, Amazon, and Instacart. Add items to your cart, and we'll create a smart shopping plan that saves you money.
              </p>
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="mb-6">
          <h3 className="mb-4">Frequently Asked Questions</h3>
          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-4"
              >
                <AccordionTrigger className="text-left hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Contact Support */}
        <div className="bg-accent rounded-lg p-4">
          <h4 className="mb-3">Still need help?</h4>
          <Button className="w-full" onClick={() => alert('Support chat - Coming soon')}>
            <MessageCircle className="w-4 h-4 mr-2" />
            Contact Support
          </Button>
        </div>

        {/* Policy Links */}
        <div className="mt-6 space-y-2">
          <button 
            className="w-full text-sm text-primary hover:underline"
            onClick={() => alert('Privacy Policy - Coming soon')}
          >
            Privacy Policy
          </button>
          <button 
            className="w-full text-sm text-primary hover:underline"
            onClick={() => alert('Terms of Service - Coming soon')}
          >
            Terms of Service
          </button>
          <button 
            className="w-full text-sm text-primary hover:underline"
            onClick={() => alert('Affiliate Disclosure - Coming soon')}
          >
            Affiliate Disclosure
          </button>
        </div>
      </div>
    </div>
  );
}
