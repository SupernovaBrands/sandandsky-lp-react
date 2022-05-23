const Questions = [
    {
        question: "What kind of tan do you want to have?",
        answers: [
            'Natural',
            'Sun-kissed and fresh from Holiday',
            'Deep, bronzed, and at least 2 levels darker than my original',
        ],
        type: 'SingleChoice',
        buttonType: 'full',
    },
    {
        question: "What’s your skin tone?",
        answers: [
            'Fair',
            'Light',
            'Medium',
            'Dark',
        ],
        images: [
            { 
                jpg: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/5ae2dd27-d9fe-4977-ac17-7f9fed94eb00/828x',
                webp: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/a071a974-5d70-4eb2-1cdf-b3fa5a86ec00/828x',
            },
            {
                jpg: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/8721f91b-8b2a-47c3-90d7-8014886cb400/828x',
                webp: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/74efb78a-b052-4509-dd77-342afc958a00/828x',
            },
            {
                jpg: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/b46f9838-8997-4f8e-2919-f4d834801500/828x',
                webp: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/b26eec13-744b-4e93-845c-82e785493800/828x',
            },
            {
                jpg: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/44916792-ff79-4c61-e66f-508e0540c800/828x',
                webp: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/62ec87bb-b9f4-44b7-04a2-eba153bb3900/828x',
            },
        ],
        type: 'SingleChoiceImage',
    },
    {
        question: 'Which areas do you want to tan?',
        answers: [
            'Face',
            'Body',
            'Both',
        ],
        type: 'SingleChoice',
        buttonType: 'full',
    },    
    {
        question: "Have you used self-tanner before?",
        answers: [
            "Yes, I've tried them all!",
            "I have, I am occasionally tanning with self tanner",
            "No, this would be my first",
        ],
        type: 'SingleChoice',
        buttonType: 'full',
    },
    {
        question: "What brands are you using right now?",
        answers: [
            {label: 'Coco & Eve', type: 'checkbox'},
            {label: 'Bali Body', type: 'checkbox'},
            {label: 'Bondi Sands', type: 'checkbox'},
            {label: 'b.tan', type: 'checkbox'},
            {label: 'St. Tropez', type: 'checkbox'},
            {label: 'Coola', type: 'checkbox'},
            {label: 'Isle Paradise', type: 'checkbox'},
            {label: 'Tan-Luxe', type: 'checkbox'},
            {label: 'Loving Tan', type: 'checkbox'},
            {label: 'Other', type: 'input'},
        ],
        caption: 'Choose all that apply!',
        type: 'MultipleChoice',
    },
    {
        question: "What do you like in a self-tanner?",
        answers: [
            {label: 'Easy application', type: 'checkboxNumber'},
            {label: 'Non-drying', type: 'checkboxNumber'},
            {label: 'No orange tones', type: 'checkboxNumber'},
            {label: 'No bad tan smells', type: 'checkboxNumber'},
            {label: 'Non-sticky, and light weight', type: 'checkboxNumber'},
            {label: 'Vegan and Cruelty-free', type: 'checkboxNumber'},
            {label: "This doesn't apply to me", type: 'checkboxAll'},
        ],
        caption: 'Choose up to 6 in order of priority',
        type: 'MultipleChoice',
        lastFull: true,
        maxChoose: 6,
        lastDisableForAll: true,
    },
    {
        question: "Do you like looking tanned?",
        answers: [
            "Occasionally",
            "I love a post holiday glow",
            "I am always looking tanned",
        ],
        type: 'SingleChoice',
        buttonType: 'full',
    },
    {
        question: "What are the reasons you want to use a self-tanner right now?",
        answers: [
            {label: 'Holiday', type: 'checkbox'},
            {label: 'Party', type: 'checkbox'},
            {label: 'Workout', type: 'checkbox'},
            {label: 'Better weather', type: 'checkbox'},
            {label: 'Look healthier', type: 'checkbox'},
            {label: 'Even out skin tone', type: 'checkbox'},
            {label: 'Other', type: 'input'},
        ],
        type: 'MultipleChoice',
        caption: 'Choose all that apply!',
        lastFull: true,
    },
    {
        question: "What's your age?",
        answers: [
            '18-24',
            '25-34',
            '35-44',
            '45-54',
            '55-64',
            '65 up',
        ],
        type: 'SingleChoice',
    },
];

export default Questions;