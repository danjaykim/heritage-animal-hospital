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
    console.log(faqData)
    return (
        <section className="containers py-20">
            <h1 className="font-nyght text-center">
                Frequently Asked Questions
            </h1>
            <div className="flex flex-col gap-8">
                {faqData.map((category, catIndex) => {
                    return (
                        <div key={catIndex} className="flex flex-col gap-4">
                            <h2>{category.category}</h2>
                            {category.faqs.map((faq, faqIndex) => {
                                return (
                                    <Disclosure
                                        as="div"
                                        key={faqIndex}
                                        className="border-4 rounded-md w-full text-left p-4"
                                    >
                                        {({ open }) => (
                                            <>
                                                <DisclosureButton className="flex justify-between w-full">
                                                    {faq.question}
                                                </DisclosureButton>
                                                <AnimatePresence>
                                                    {open && (
                                                        <DisclosurePanel
                                                            static
                                                            as={motion.div}
                                                            initial="close"
                                                            animate="open"
                                                            exit="close"
                                                            variants={
                                                                faqDropdown
                                                            }
                                                            transition={{
                                                                duration: 0.3,
                                                                ease: 'easeInOut',
                                                            }}
                                                            className="overflow-hidden"
                                                        >
                                                            {faq.answer}
                                                        </DisclosurePanel>
                                                    )}
                                                </AnimatePresence>
                                            </>
                                        )}
                                    </Disclosure>
                                )
                            })}
                        </div>
                    )
                })}
            </div>
        </section>
    )
}
