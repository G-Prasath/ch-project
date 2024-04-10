import React from 'react';
import Accordion, { AccordionItem, AccordionTitle, AccordionContent } from "../Accordion";

const AccordionWrap = () => {
    return (
      <div className="agency-accordion max-mb-n30">
        <Accordion>
          <AccordionItem id="one">
            <AccordionTitle id="one">
              What is Pre- engineered building?
            </AccordionTitle>
            <AccordionContent id="one">
              In 2024, pre-engineered buildings (PEBs) are like eco-friendly
              building blocks. They&apos;re faster to build, better for the
              environment, and offer more design choices. That&apos;s why people
              still love using them for construction.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem id="two">
            <AccordionTitle id="two">
              Why does insulation matter in industrial roofing?
            </AccordionTitle>
            <AccordionContent id="two">
              Insulation in industrial roofing regulates temperature, prevents
              condensation, and protects against temperature-related damage,
              enhancing comfort for workers and maintaining product quality in
              industrial settings.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem id="three">
            <AccordionTitle id="three">
              What&apos;s the warehouse&apos;s construction timeline?
            </AccordionTitle>
            <AccordionContent id="three">
              The warehouse construction timeline spans between 100 to 150 days,
              ensuring timely completion. This duration accounts for various
              stages, including planning, permitting, building and finalizing
              construction.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    );
}

export default AccordionWrap;
