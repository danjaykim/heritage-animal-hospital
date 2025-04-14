import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
} from '@headlessui/react'
import { motion, AnimatePresence } from 'motion/react'
import { faqData } from './FaqData'
import { faqDropdown } from '../../animations/animations'

// import chevronDown from '../../assets/images/svg/chevron-down.svg'

export default function Faq() {
    return (
        <section className="containers py-20 text-[#1A2954]">
            <h1 className="font-nyght text-3xl md:text-4xl lg:text-6xl mb-4">
                Frequently Asked Questions
            </h1>
            <p className="lg:w-1/2 mb-12 lg:mb-16">
                Find quick answers to the most common questions about our
                servives, appointments, and policies. Still need help? Feel free
                to reach out to us at 123-123-1234
            </p>
            <div className="flex flex-col gap-10 lg:gap-14">
                {faqData.map((category, catIndex) => {
                    return (
                        <div key={catIndex} className="flex flex-col gap-4">
                            <h2 className="text-lg font-semibold">
                                {category.category}
                            </h2>
                            {category.faqs.map((faq, faqIndex) => {
                                return (
                                    <motion.div
                                        key={faqIndex}
                                        layout
                                        className="border-2 rounded-md w-full text-left p-6"
                                    >
                                        <Disclosure>
                                            {({ open }) => (
                                                <>
                                                    <DisclosureButton className="font-medium flex justify-between w-full">
                                                        {faq.question}
                                                    </DisclosureButton>
                                                    <AnimatePresence mode="wait">
                                                        {open && (
                                                            <motion.div
                                                                layout
                                                                initial="close"
                                                                animate="open"
                                                                exit="close"
                                                                variants={
                                                                    faqDropdown
                                                                }
                                                                transition={{
                                                                    duration: 0.2,
                                                                    ease: 'easeInOut',
                                                                }}
                                                                className="overflow-hidden"
                                                            >
                                                                <DisclosurePanel>
                                                                    {faq.answer}
                                                                </DisclosurePanel>
                                                            </motion.div>
                                                        )}
                                                    </AnimatePresence>
                                                </>
                                            )}
                                        </Disclosure>
                                    </motion.div>
                                )
                            })}
                        </div>
                    )
                })}
            </div>
        </section>
    )
}
