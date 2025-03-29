import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
} from '@headlessui/react'

import chevronDown from '../../assets/images/svg/chevron-down.svg'

export default function Faq() {
    return (
        <section>
            <h1>FAQ</h1>
            <Disclosure>
                <DisclosureButton>Question</DisclosureButton>
                <DisclosurePanel>Answer</DisclosurePanel>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-chevron-down"
                    viewBox="0 0 16 16"
                >
                    <path
                        d="M1.5 5.5a.5.5 0 0 1 .707-.708L8 
                        9.293l5.793-5.793a.5.5 0 1 1 .707.708l-6 
                        6a.5.5 0 0 1-.707 0l-6-6z"
                    />
                </svg>
            </Disclosure>
        </section>
    )
}
