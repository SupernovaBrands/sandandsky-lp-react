import getEnvironmentStress from './environment-stress';

const getProductRecommendation = (Questions, currentAnswer) => {
	const envStressResult = getEnvironmentStress(currentAnswer);

    const skinConcernsQ = Questions[6].answers;
    const skinConcernsA = currentAnswer[7];

    const ageRanges = Questions[4].answers;
    const ageRangesA = currentAnswer[5];

    let productsRecommend = [];
    let activePriority = [];

    const skinTypeQuestions = Questions[0].answers;
    const skinTypeAnswer = currentAnswer[1];

    switch (skinConcernsA) {
        case skinConcernsQ[0]: //Clogged or enlarged pores
            switch (ageRangesA) {
                case ageRanges[0]: // <20, 20-25
                case ageRanges[1]:
                    switch (skinTypeAnswer) {
                        case skinTypeQuestions[0]: //Tends to get shiny throughout the day
                            if (envStressResult.title === 'LOW' || envStressResult.title === 'AVERAGE') {
                                productsRecommend = ['OC Cleanser', 'OC Mask', 'OC Moisturiser'];
                                activePriority = ['AHAs', 'Salicylic Acid', 'Niacinamide'];
                            } else {
                                productsRecommend = ['OC Cleanser', 'OC Mask', 'OC Moisturiser'];
                                activePriority = ['AHAs', 'Salicylic Acid', 'Niacinamide'];
                            }
                            break;
                        case skinTypeQuestions[1]: //A combination of shiny and dry on different areas
                            if (envStressResult.title === 'LOW' || envStressResult.title === 'AVERAGE') {
                                productsRecommend = ['APC Cleanser', 'APC Mask', 'Marshmallow Toner'];
                                activePriority = ['AHAs', 'Vitamin E', 'Glycolic Acid'];
                            } else {
                                productsRecommend = ['APC Mask', 'Marshmallow Toner', 'TSW Serum'];
                                activePriority = ['Vitamin E', 'Glycolic Acid', 'Hyaluronic Acid'];
                            }
                            break;
                        case skinTypeQuestions[2]: //Comfortable in summer, but dry in cooler climates
                            if (envStressResult.title === 'LOW' || envStressResult.title === 'AVERAGE') {
                                productsRecommend = ['APC Mask', 'Marshmallow Toner', 'TSW Night Cream'];
                                activePriority = ['Vitamin E', 'Glycolic Acid', 'Hyaluronic Acid'];
                            } else {
                                productsRecommend = ['APC Mask', 'Marshmallow Toner', 'TSW Night Cream'];
                                activePriority = ['Vitamin E', 'Glycolic Acid', 'Hyaluronic Acid'];
                            }
                            break;
                        default: //Red and flaky with uneven texture
                            if (envStressResult.title === 'LOW' || envStressResult.title === 'AVERAGE') {
                                productsRecommend = ['OC Cleanser', 'Marshmallow Toner', 'OC Moisturiser'];
                                activePriority = ['AHAs', 'Glycolic Acid', 'Niacinamide'];
                            } else {
                                productsRecommend = ['APC Mask', 'TSW Serum', 'OC Moisturiser'];
                                activePriority = ['Vitamin E', 'Hyaluronic Acid', 'Niacinamide'];
                            }
                            break;
                    }
                    break;
                    default: //26-35, 36-45, >45
                        switch (skinTypeAnswer) {
                            case skinTypeQuestions[0]: //Tends to get shiny throughout the day
                                if (envStressResult.title === 'LOW' || envStressResult.title === 'AVERAGE') {
                                    productsRecommend = ['OC Cleanser', 'OC Mask', 'OC Moisturiser'];
                                    activePriority = ['AHAs', 'Salicylic Acid', 'Niacinamide'];
                                } else {
                                    productsRecommend = ['OC Cleanser', 'OC Mask', 'OC Moisturiser'];
                                    activePriority = ['AHAs', 'Salicylic Acid', 'Niacinamide'];
                                }
                                break;
                            case skinTypeQuestions[1]: //A combination of shiny and dry on different areas
                                if (envStressResult.title === 'LOW' || envStressResult.title === 'AVERAGE') {
                                    productsRecommend = ['APC Cleanser', 'APC Mask', 'Marshmallow Toner'];
                                    activePriority = ['AHAs', 'Vitamin E', 'Glycolic Acid'];
                                } else {
                                    productsRecommend = ['Marshmallow Toner', 'APC Mask', 'TSW Serum'];
                                    activePriority = ['Glycolic Acid', 'Vitamin E', 'Hyaluronic Acid'];
                                }
                                break;
                            case skinTypeQuestions[2]: //Comfortable in summer, but dry in cooler climates
                                if (envStressResult.title === 'LOW' || envStressResult.title === 'AVERAGE') {
                                    productsRecommend = ['APC Mask', 'AEA Serum', 'TSW Night Cream'];
                                    activePriority = ['AHAs', 'Vitamin C', 'Hyaluronic Acid'];
                                } else {
                                    productsRecommend = ['Marshmallow Toner', 'APC Mask', 'TSW Night Cream'];
                                    activePriority = ['Glycolic Acid', 'Vitamin E', 'Hyaluronic Acid'];
                                }
                                break;
                            default: //Red and flaky with uneven texture
                                if (envStressResult.title === 'LOW' || envStressResult.title === 'AVERAGE') {
                                    productsRecommend = ['Marshmallow Toner', 'TSW Mask', 'TSW Cream'];
                                    activePriority = ['Glycolic Acid', 'Vegan Squalane', 'Hyaluronic Acid'];
                                } else {
                                    productsRecommend = ['AEA Enzyme Polish', 'Marshmallow Toner', 'TSW Cream'];
                                    activePriority = ['Vitamin C', 'AHAs', 'Hyaluronic Acid'];
                                }
                                break;
                        }
                        break;
                }
                break;
            case skinConcernsQ[1]: //Blemishes or acne
                switch (ageRangesA) {
                    case ageRanges[0]:// <20, 20-25
                    case ageRanges[1]:
                        switch (skinTypeAnswer) {
                            case skinTypeQuestions[0]: //Tends to get shiny throughout the day
                                if (envStressResult.title === 'LOW' || envStressResult.title === 'AVERAGE') {
                                    productsRecommend = ['OC Cleanser', 'OC Mask', 'OC Moisturiser'];
                                    activePriority = ['AHAs', 'Salicylic Acid', 'Niacinamide'];
                                } else {
                                    productsRecommend = ['OC Cleanser', 'OC Mask', 'OC Moisturiser'];
                                    activePriority = ['AHAs', 'Salicylic Acid', 'Niacinamide'];
                                }
                                break;
                            case skinTypeQuestions[1]: //A combination of shiny and dry on different areas
                                if (envStressResult.title === 'LOW' || envStressResult.title === 'AVERAGE') {
                                    productsRecommend = ['OC Cleanser', 'OC Mask', 'OC Moisturiser'];
                                    activePriority = ['AHAs', 'Salicylic Acid', 'Niacinamide'];
                                } else {
                                    productsRecommend = ['OC Cleanser', 'OC Mask', 'OC Moisturiser'];
                                    activePriority = ['AHAs', 'Salicylic Acid', 'Niacinamide'];
                                }
                                break;
                            case skinTypeQuestions[2]: //Comfortable in summer, but dry in cooler climates
                                if (envStressResult.title === 'LOW' || envStressResult.title === 'AVERAGE') {
                                    productsRecommend = ['OC Cleanser', 'Marshmallow Toner', 'OC Moisturiser'];
                                    activePriority = ['AHAs', 'Glycolic Acid', 'Niacinamide'];
                                } else {
                                    productsRecommend = ['OC Cleanser', 'OC Mask', 'OC Moisturiser'];
                                    activePriority = ['AHAs', 'Salicylic Acid', 'Niacinamide'];
                                }
                                break;
                            default: //Red and flaky with uneven texture
                                if (envStressResult.title === 'LOW' || envStressResult.title === 'AVERAGE') {
                                    productsRecommend = ['OC Cleanser', 'TSW Mask', 'TSW Cream'];
                                    activePriority = ['AHAs', 'Vegan Squalane', 'Glycolic Acid'];
                                } else {
                                    productsRecommend = ['OC Cleanser', 'TSW Mask', 'Marshmallow Toner'];
                                    activePriority = ['AHAs', 'Vegan Squalane', 'Glycolic Acid'];
                                }   
                                break;
                        }
                        break;
                    default://26-35, 36-45, >45
                        switch (skinTypeAnswer) {
                            case skinTypeQuestions[0]: //Tends to get shiny throughout the day
                                if (envStressResult.title === 'LOW' || envStressResult.title === 'AVERAGE') {
                                    productsRecommend = ['OC Cleanser', 'OC Mask', 'OC Moisturiser'];
                                    activePriority = ['AHAs', 'Salicylic Acid', 'Niacinamide'];
                                } else {
                                    productsRecommend = ['OC Cleanser', 'OC Mask', 'OC Moisturiser'];
                                    activePriority = ['AHAs', 'Salicylic Acid', 'Niacinamide'];
                                }
                                break;
                            case skinTypeQuestions[1]: //A combination of shiny and dry on different areas
                                if (envStressResult.title === 'LOW' || envStressResult.title === 'AVERAGE') {
                                    productsRecommend = ['APC Cleanser', 'OC Mask', 'TSW Serum'];
                                    activePriority = ['AHAs', 'Salicylic Acid', 'Hyaluronic Acid'];
                                } else {
                                    productsRecommend = ['OC Cleanser', 'OC Mask', 'TSW Cream'];
                                    activePriority = ['AHAs', 'Salicylic Acid', 'Hyaluronic Acid'];
                                }
                                break;
                            case skinTypeQuestions[2]: //Comfortable in summer, but dry in cooler climates
                                if (envStressResult.title === 'LOW' || envStressResult.title === 'AVERAGE') {
                                    productsRecommend = ['APC Cleanser', 'Marshmallow Toner', 'TSW Night Cream'];
                                    activePriority = ['AHAs', 'Glycolic Acid', 'Hyaluronic Acid'];
                                } else {
                                    productsRecommend = ['APC Cleanser', 'APC Mask', 'TSW Night Cream'];
                                    activePriority = ['AHAs', 'Vitamin E', 'Hyaluronic Acid'];
                                }
                                break;
                            default: //Red and flaky with uneven texture
                                if (envStressResult.title === 'LOW' || envStressResult.title === 'AVERAGE') {
                                    productsRecommend = ['Marshmallow Toner', 'APC Cleanser', 'TSW Mask'];
                                    activePriority = ['Glycolic Acid', 'AHAs', 'Vegan Squalane'];
                                } else {
                                    productsRecommend = ['Marshmallow Toner', 'OC Cleanser', 'TSW Mask'];
                                    activePriority = ['Glycolic Acid', 'AHAs', 'Vegan Squalane'];
                                }
                                break;
                        }
                        break;
                }
                break;
            case skinConcernsQ[2]: //Excess oil
                switch (ageRangesA) {
                    case ageRanges[0]:// <20, 20-25
                    case ageRanges[1]:
                        switch (skinTypeAnswer) {
                            case skinTypeQuestions[0]: //Tends to get shiny throughout the day
                                if (envStressResult.title === 'LOW' || envStressResult.title === 'AVERAGE') {
                                    productsRecommend = ['OC Cleanser', 'OC Mask', 'OC Moisturiser'];
                                    activePriority = ['AHAs', 'Salicylic Acid', 'Niacinamide'];
                                } else {
                                    productsRecommend = ['OC Cleanser', 'OC Mask', 'OC Moisturiser'];
                                    activePriority = ['AHAs', 'Salicylic Acid', 'Niacinamide'];
                                }
                                break;
                            case skinTypeQuestions[1]: //A combination of shiny and dry on different areas
                                if (envStressResult.title === 'LOW' || envStressResult.title === 'AVERAGE') {
                                    productsRecommend = ['OC Cleanser', 'APC Mask', 'OC Moisturiser'];
                                    activePriority = ['AHAs', 'Vitamin E', 'Niacinamide'];
                                } else {
                                    productsRecommend = ['OC Cleanser', 'OC Mask', 'OC Moisturiser'];
                                    activePriority = ['AHAs', 'Salicylic Acid', 'Niacinamide'];
                                }
                                break;
                            case skinTypeQuestions[2]: //Comfortable in summer, but dry in cooler climates
                                if (envStressResult.title === 'LOW' || envStressResult.title === 'AVERAGE') {
                                    productsRecommend = ['Marshmallow Toner', 'TSW Mask', 'TSW Night Cream'];
                                    activePriority = ['Glycolic Acid', 'Vegan Squalane', 'Hyaluronic Acid'];
                                } else {
                                    productsRecommend = ['Marshmallow Toner', 'TSW Mask', 'TSW Night Cream'];
                                    activePriority = ['Glycolic Acid', 'Vegan Squalane', 'Hyaluronic Acid'];
                                }
                                break;
                            default: //Red and flaky with uneven texture
                                if (envStressResult.title === 'LOW' || envStressResult.title === 'AVERAGE') {
                                    productsRecommend = ['OC Cleanser', 'Marshmallow Toner', 'TSW Cream'];
                                    activePriority = ['AHAs', 'Glycolic Acid', 'Hyaluronic Acid'];
                                } else {
                                    productsRecommend = ['OC Cleanser', 'Marshmallow Toner', 'TSW Cream'];
                                    activePriority = ['AHAs', 'Glycolic Acid', 'Hyaluronic Acid'];
                                }
                                break;
                        }
                        break;
                    default://26-35, 36-45, >45
                        switch (skinTypeAnswer) {
                            case skinTypeQuestions[0]: //Tends to get shiny throughout the day
                                if (envStressResult.title === 'LOW' || envStressResult.title === 'AVERAGE') {
                                    productsRecommend = ['OC Cleanser', 'OC Mask', 'OC Moisturiser'];
                                    activePriority = ['AHAs', 'Salicylic Acid', 'Niacinamide'];
                                } else {
                                    productsRecommend = ['OC Cleanser', 'OC Mask', 'OC Moisturiser'];
                                    activePriority = ['AHAs', 'Salicylic Acid', 'Niacinamide'];
                                }
                                break;
                            case skinTypeQuestions[1]: //A combination of shiny and dry on different areas
                                if (envStressResult.title === 'LOW' || envStressResult.title === 'AVERAGE') {
                                    productsRecommend = ['OC Cleanser', 'APC Mask', 'TSW Serum'];
                                    activePriority = ['AHAs', 'Vitamin E', 'Hyaluronic Acid'];
                                } else {
                                    productsRecommend = ['OC Cleanser', 'OC Mask', 'TSW Cream'];
                                    activePriority = ['AHAs', 'Salicylic Acid', 'Hyaluronic Acid'];
                                }
                                break;
                            case skinTypeQuestions[2]: //Comfortable in summer, but dry in cooler climates
                                if (envStressResult.title === 'LOW' || envStressResult.title === 'AVERAGE') {
                                    productsRecommend = ['Marshmallow Toner', 'APC Mask', 'TSW Night Cream'];
                                    activePriority = ['AHAs', 'Vitamin E', 'Hyaluronic Acid'];
                                } else {
                                    productsRecommend = ['Marshmallow Toner', 'TSW Mask', 'TSW Night Cream'];
                                    activePriority = ['AHAs', 'Vegan Squalane', 'Hyaluronic Acid'];
                                }
                                break;
                            default: //Red and flaky with uneven texture
                                if (envStressResult.title === 'LOW' || envStressResult.title === 'AVERAGE') {
                                    productsRecommend = ['OC Cleanser', 'Marshmallow Toner', 'TSW Serum'];
                                    activePriority = ['AHAs', 'Glycolic Acid', 'Hyaluronic Acid'];
                                } else {
                                    productsRecommend = ['OC Cleanser', 'Marshmallow Toner', 'TSW Cream'];
                                    activePriority = ['AHAs', 'Glycolic Acid', 'Hyaluronic Acid'];
                                }
                                break;
                        }
                        break;
                }
                break;
            case skinConcernsQ[3]: //Scarring or uneven skin texture
                switch (ageRangesA) {
                    case ageRanges[0]:// <20, 20-25
                    case ageRanges[1]:
                        switch (skinTypeAnswer) {
                            case skinTypeQuestions[0]: //Tends to get shiny throughout the day
                                if (envStressResult.title === 'LOW' || envStressResult.title === 'AVERAGE') {
                                    productsRecommend = ['APC Cleanser', 'APC Exfoliator', 'AEA Serum'];
                                    activePriority = ['AHAs', 'Vitamin E', 'Vitamin C'];
                                } else {
                                    productsRecommend = ['AEA Enzyme Polish', 'AEA Mask', 'AEA Moisturiser'];
                                    activePriority = ['AHAs', 'Hyaluronic Acid', 'Vitamin C'];
                                }
                                break;
                            case skinTypeQuestions[1]: //A combination of shiny and dry on different areas
                                if (envStressResult.title === 'LOW' || envStressResult.title === 'AVERAGE') {
                                    productsRecommend = ['APC Exfoliator', 'TSW Serum', 'TSW Cream'];
                                    activePriority = ['Vitamin E', 'AHAs', 'Hyaluronic Acid'];
                                } else {
                                    productsRecommend = ['AEA Enzyme Polish', 'AEA Mask', 'AEA Moisturiser'];
                                    activePriority = ['Vitamin C', 'Hyaluronic Acid', 'Vegan Squalane'];
                                }
                                break;
                            case skinTypeQuestions[2]: //Comfortable in summer, but dry in cooler climates
                                if (envStressResult.title === 'LOW' || envStressResult.title === 'AVERAGE') {
                                    productsRecommend = ['APC Cleanser', 'APC Exfoliator', 'AEA Serum'];
                                    activePriority = ['AHAs', 'Vitamin E', 'Vitamin C'];
                                } else {
                                    productsRecommend = ['APC Cleanser', 'APC Exfoliator', 'AEA Moisturiser'];
                                    activePriority = ['AHAs', 'Vitamin E', 'Vitamin C'];
                                }
                                break;
                            default: //Red and flaky with uneven texture
                                if (envStressResult.title === 'LOW' || envStressResult.title === 'AVERAGE') {
                                    productsRecommend = ['AEA Enzyme Polish', 'AEA Serum', 'TSW Cream'];
                                    activePriority = ['AHAs', 'Vitamin C', 'Hyaluronic Acid'];
                                } else {
                                    productsRecommend = ['AEA Enzyme Polish', 'AEA Serum', 'AEA Moisturiser'];
                                    activePriority = ['AHAs', 'Vitamin C', 'Vegan Squalane'];
                                }
                                break;
                        }
                        break;
                    default://26-35, 36-45, >45
                        switch (skinTypeAnswer) {
                            case skinTypeQuestions[0]: //Tends to get shiny throughout the day
                                if (envStressResult.title === 'LOW' || envStressResult.title === 'AVERAGE') {
                                    productsRecommend = ['APC Cleanser', 'APC Exfoliator', 'AEA Serum'];
                                    activePriority = ['AHAs', 'Vitamin E', 'Vitamin C'];
                                } else {
                                    productsRecommend = ['AEA Enzyme Polish', 'AEA Mask', 'AEA Serum'];
                                    activePriority = ['AHAs', 'Hyaluronic Acid', 'Vitamin C'];
                                }
                                break;
                            case skinTypeQuestions[1]: //A combination of shiny and dry on different areas
                                if (envStressResult.title === 'LOW' || envStressResult.title === 'AVERAGE') {
                                    productsRecommend = ['APC Cleanser', 'AEA Enzyme Polish', 'AEA Mask'];
                                    activePriority = ['AHAs', 'Vitamin C', 'Hyaluronic Acid'];
                                } else {
                                    productsRecommend = ['APC Cleanser', 'AEA Enzyme Polish', 'AEA Mask'];
                                    activePriority = ['AHAs', 'Vitamin C', 'Hyaluronic Acid'];
                                }
                                break;
                            case skinTypeQuestions[2]: //Comfortable in summer, but dry in cooler climates
                                if (envStressResult.title === 'LOW' || envStressResult.title === 'AVERAGE') {
                                    productsRecommend = ['APC Cleanser', 'APC Exfoliator', 'AEA Moisturiser'];
                                    activePriority = ['AHAs', 'Vitamin E', 'Vitamin C'];
                                } else {
                                    productsRecommend = ['APC Cleanser', 'AEA Mask', 'AEA Serum'];
                                    activePriority = ['AHAs', 'Hyaluronic Acid', 'Vitamin C'];
                                }
                                break;
                            default: //Red and flaky with uneven texture
                                if (envStressResult.title === 'LOW' || envStressResult.title === 'AVERAGE') {
                                    productsRecommend = ['AEA Enzyme Polish', 'AEA Serum', 'AEA Moisturiser'];
                                    activePriority = ['AHAs', 'Vitamin C', 'Vegan Squalane'];
                                } else {
                                    productsRecommend = ['AEA Enzyme Polish', 'AEA Serum', 'AEA Moisturiser'];
                                    activePriority = ['AHAs', 'Vitamin C', 'Vegan Squalane'];
                                }
                                break;
                        }
                        break;
                }
                break;
            case skinConcernsQ[4]: //Redness
                switch (ageRangesA) {
                    case ageRanges[0]:// <20, 20-25
                    case ageRanges[1]:
                        switch (skinTypeAnswer) {
                            case skinTypeQuestions[0]: //Tends to get shiny throughout the day
                                if (envStressResult.title === 'LOW' || envStressResult.title === 'AVERAGE') {
                                    productsRecommend = ['OC Cleanser', 'OC Mask', 'TSW Cream'];
                                    activePriority = ['AHAs', 'Salicylic Acid', 'Hyaluronic Acid'];
                                } else {
                                    productsRecommend = ['OC Cleanser', 'OC Mask', 'TSW Serum'];
                                    activePriority = ['AHAs', 'Salicylic Acid', 'Hyaluronic Acid'];
                                }
                                break;
                            case skinTypeQuestions[1]: //A combination of shiny and dry on different areas
                                if (envStressResult.title === 'LOW' || envStressResult.title === 'AVERAGE') {
                                    productsRecommend = ['APC Cleanser', 'TSW Mask', 'TSW Cream'];
                                    activePriority = ['AHAs', 'Vegan Squalane', 'Hyaluronic Acid'];
                                } else {
                                    productsRecommend = ['APC Cleanser', 'APC Mask', 'TSW Cream'];
                                    activePriority = ['AHAs', 'Vitamin E', 'Hyaluronic Acid'];
                                }
                                break;
                            case skinTypeQuestions[2]: //Comfortable in summer, but dry in cooler climates
                                if (envStressResult.title === 'LOW' || envStressResult.title === 'AVERAGE') {
                                    productsRecommend = ['APC Mask', 'TSW Serum', 'TSW Night Cream'];
                                    activePriority = ['Vitamin E', 'AHAs', 'Hyaluronic Acid'];
                                } else {
                                    productsRecommend = ['AEA Enzyme Polish', 'TSW Mask', 'TSW Night Cream'];
                                    activePriority = ['AHAs', 'Vegan Squalane', 'Hyaluronic Acid'];
                                }
                                break;
                            default: //Red and flaky with uneven texture
                                if (envStressResult.title === 'LOW' || envStressResult.title === 'AVERAGE') {
                                    productsRecommend = ['TSW Mask', 'TSW Serum', 'TSW Cream'];
                                    activePriority = ['Vegan Squalane', 'Hyaluronic Acid', 'AHAs'];
                                } else {
                                    productsRecommend = ['TSW Mask', 'TSW Serum', 'TSW Cream'];
                                    activePriority = ['Vegan Squalane', 'Hyaluronic Acid', 'AHAs'];
                                }
                                break;
                        }
                        break;
                    default://26-35, 36-45, >45
                        switch (skinTypeAnswer) {
                            case skinTypeQuestions[0]: //Tends to get shiny throughout the day
                                if (envStressResult.title === 'LOW' || envStressResult.title === 'AVERAGE') {
                                    productsRecommend = ['OC Cleanser', 'APC Mask', 'TSW Serum'];
                                    activePriority = ['AHAs', 'Vitamin E', 'Hyaluronic Acid'];
                                } else {
                                    productsRecommend = ['OC Cleanser', 'OC Mask', 'TSW Serum'];
                                    activePriority = ['AHAs', 'Salicylic Acid', 'Hyaluronic Acid'];
                                }
                                break;
                            case skinTypeQuestions[1]: //A combination of shiny and dry on different areas
                                if (envStressResult.title === 'LOW' || envStressResult.title === 'AVERAGE') {
                                    productsRecommend = ['APC Mask', 'TSW Serum', 'TSW Night Cream'];
                                    activePriority = ['Vitamin E', 'AHAs', 'Hyaluronic Acid'];
                                } else {
                                    productsRecommend = ['APC Cleanser', 'APC Mask', 'TSW Night Cream'];
                                    activePriority = ['AHAs', 'Vitamin E', 'Hyaluronic Acid'];
                                }
                                break;
                            case skinTypeQuestions[2]: //Comfortable in summer, but dry in cooler climates
                                if (envStressResult.title === 'LOW' || envStressResult.title === 'AVERAGE') {
                                    productsRecommend = ['TSW Mask', 'TSW Serum', 'TSW Night Cream'];
                                    activePriority = ['Vegan Squalane', 'AHAs', 'Hyaluronic Acid'];
                                } else {
                                    productsRecommend = ['AEA Enzyme Polish', 'TSW Mask', 'OC Moisturiser'];
                                    activePriority = ['AHAs', 'Vegan Squalane', 'Niacinamide'];
                                }
                                break;
                            default: //Red and flaky with uneven texture
                                if (envStressResult.title === 'LOW' || envStressResult.title === 'AVERAGE') {
                                    productsRecommend = ['APC Exfoliator', 'TSW Serum', 'TSW Cream'];
                                    activePriority = ['Vitamin E', 'AHAs', 'Hyaluronic Acid'];
                                } else {
                                    productsRecommend = ['TSW Mask', 'TSW Serum', 'TSW Cream'];
                                    activePriority = ['Vegan Squalane', 'Hyaluronic Acid', 'AHAs'];
                                }
                                break;
                        }
                        break;
                }
                break;
            case skinConcernsQ[5]: //Dryness and dehydration
                switch (ageRangesA) {
                    case ageRanges[0]:// <20, 20-25
                    case ageRanges[1]:
                        switch (skinTypeAnswer) {
                            case skinTypeQuestions[0]: //Tends to get shiny throughout the day
                                if (envStressResult.title === 'LOW' || envStressResult.title === 'AVERAGE') {
                                    productsRecommend = ['APC Mask', 'TSW Serum', 'TSW Cream'];
                                    activePriority = ['Vitamin E', 'AHAs', 'Hyaluronic Acid'];
                                } else {
                                    productsRecommend = ['APC Cleanser', 'APC Mask', 'TSW Cream'];
                                    activePriority = ['AHAs', 'Vitamin E', 'Hyaluronic Acid'];
                                }
                                break;
                            case skinTypeQuestions[1]: //A combination of shiny and dry on different areas
                                if (envStressResult.title === 'LOW' || envStressResult.title === 'AVERAGE') {
                                    productsRecommend = ['APC Mask', 'TSW Serum', 'TSW Cream'];
                                    activePriority = ['Vitamin E', 'AHAs', 'Hyaluronic Acid'];
                                } else {
                                    productsRecommend = ['APC Mask', 'TSW Serum', 'TSW Night Cream'];
                                    activePriority = ['Vitamin E', 'AHAs', 'Hyaluronic Acid'];
                                }
                                break;
                            case skinTypeQuestions[2]: //Comfortable in summer, but dry in cooler climates
                                if (envStressResult.title === 'LOW' || envStressResult.title === 'AVERAGE') {
                                    productsRecommend = ['TSW Mask', 'TSW Serum', 'TSW Night Cream'];
                                    activePriority = ['Vegan Squalane', 'AHAs', 'Hyaluronic Acid'];
                                } else {
                                    productsRecommend = ['TSW Mask', 'TSW Serum', 'TSW Night Cream'];
                                    activePriority = ['Vegan Squalane', 'AHAs', 'Hyaluronic Acid'];
                                }
                                break;
                            default: //Red and flaky with uneven texture
                                if (envStressResult.title === 'LOW' || envStressResult.title === 'AVERAGE') {
                                    productsRecommend = ['TSW Mask', 'TSW Serum', 'TSW Cream'];
                                    activePriority = ['Vegan Squalane', 'Hyaluronic Acid', 'AHAs'];
                                } else {
                                    productsRecommend = ['TSW Mask', 'TSW Serum', 'TSW Cream'];
                                    activePriority = ['Vegan Squalane', 'Hyaluronic Acid', 'AHAs'];
                                }
                                break;
                        }
                        break;
                    default://26-35, 36-45, >45
                        switch (skinTypeAnswer) {
                            case skinTypeQuestions[0]: //Tends to get shiny throughout the day
                                if (envStressResult.title === 'LOW' || envStressResult.title === 'AVERAGE') {
                                    productsRecommend = ['APC Cleanser', 'TSW Mask', 'TSW Serum'];
                                    activePriority = ['AHAs', 'Vegan Squalane', 'Hyaluronic Acid'];
                                } else {
                                    productsRecommend = ['TSW Mask', 'TSW Serum', 'TSW Cream'];
                                    activePriority = ['Vegan Squalane', 'Hyaluronic Acid', 'AHAs'];
                                }
                                break;
                            case skinTypeQuestions[1]: //A combination of shiny and dry on different areas
                                if (envStressResult.title === 'LOW' || envStressResult.title === 'AVERAGE') {
                                    productsRecommend = ['AEA Enzyme Polish', 'TSW Mask', 'TSW Serum'];
                                    activePriority = ['AHAs', 'Vegan Squalane', 'Hyaluronic Acid'];
                                } else {
                                    productsRecommend = ['TSW Mask', 'TSW Serum', 'TSW Night Cream'];
                                    activePriority = ['Vegan Squalane', 'AHAs', 'Hyaluronic Acid'];
                                }
                                break;
                            case skinTypeQuestions[2]: //Comfortable in summer, but dry in cooler climates
                                if (envStressResult.title === 'LOW' || envStressResult.title === 'AVERAGE') {
                                    productsRecommend = ['TSW Mask', 'AEA Serum', 'TSW Night Cream'];
                                    activePriority = ['Vegan Squalane', 'Vitamin C', 'Hyaluronic Acid'];
                                } else {
                                    productsRecommend = ['TSW Mask', 'TSW Serum', 'TSW Night Cream'];
                                    activePriority = ['Vegan Squalane', 'AHAs', 'Hyaluronic Acid'];
                                }
                                break;
                            default: //Red and flaky with uneven texture
                                if (envStressResult.title === 'LOW' || envStressResult.title === 'AVERAGE') {
                                    productsRecommend = ['AEA Enzyme Polish', 'TSW Serum', 'TSW Cream'];
                                    activePriority = ['Vitamin C', 'AHAs', 'Hyaluronic Acid'];
                                } else {
                                    productsRecommend = ['TSW Mask', 'TSW Serum', 'TSW Cream'];
                                    activePriority = ['Vegan Squalane', 'Hyaluronic Acid', 'AHAs'];
                                }
                                break;
                        }
                        break;
                }
                break;
            case skinConcernsQ[6]: //Fine lines or wrinkles
                switch (ageRangesA) {
                    case ageRanges[0]:// <20, 20-25
                    case ageRanges[1]:
                        switch (skinTypeAnswer) {
                            case skinTypeQuestions[0]: //Tends to get shiny throughout the day
                                if (envStressResult.title === 'LOW' || envStressResult.title === 'AVERAGE') {
                                    productsRecommend = ['OC Cleanser', 'OC Mask', 'AEA Serum'];
                                    activePriority = ['AHAs', 'Salicylic Acid', 'Vitamin C'];
                                } else {
                                    productsRecommend = ['APC Cleanser', 'AEA Mask', 'AEA Moisturiser'];
                                    activePriority = ['AHAs', 'Vitamin C', 'Vegan Squalane'];
                                }
                                break;
                            case skinTypeQuestions[1]: //A combination of shiny and dry on different areas
                                if (envStressResult.title === 'LOW' || envStressResult.title === 'AVERAGE') {
                                    productsRecommend = ['APC Cleanser', 'AEA Mask', 'TSW Cream'];
                                    activePriority = ['AHAs', 'Vitamin C', 'Hyaluronic Acid'];
                                } else {
                                    productsRecommend = ['APC Cleanser', 'AEA Mask', 'TSW Cream'];
                                    activePriority = ['AHAs', 'Vitamin C', 'Hyaluronic Acid'];
                                }
                                break;
                            case skinTypeQuestions[2]: //Comfortable in summer, but dry in cooler climates
                                if (envStressResult.title === 'LOW' || envStressResult.title === 'AVERAGE') {
                                    productsRecommend = ['APC Cleanser', 'AEA Mask', 'TSW Night Cream'];
                                    activePriority = ['AHAs', 'Vitamin C', 'Hyaluronic Acid'];
                                } else {
                                    productsRecommend = ['APC Cleanser', 'AEA Mask', 'TSW Night Cream'];
                                    activePriority = ['AHAs', 'Vitamin C', 'Hyaluronic Acid'];
                                }
                                break;
                            default: //Red and flaky with uneven texture
                                if (envStressResult.title === 'LOW' || envStressResult.title === 'AVERAGE') {
                                    productsRecommend = ['AEA Mask', 'TSW Serum', 'TSW Cream'];
                                    activePriority = ['Vitamin C', 'AHAs', 'Hyaluronic Acid'];
                                } else {
                                    productsRecommend = ['AEA Mask', 'TSW Serum', 'TSW Cream'];
                                    activePriority = ['Vitamin C', 'AHAs', 'Hyaluronic Acid'];
                                }
                                break;
                        }
                        break;
                    default://26-35, 36-45, >45
                        switch (skinTypeAnswer) {
                            case skinTypeQuestions[0]: //Tends to get shiny throughout the day
                                if (envStressResult.title === 'LOW' || envStressResult.title === 'AVERAGE') {
                                    productsRecommend = ['OC Cleanser', 'AEA Mask', 'AEA Moisturiser'];
                                    activePriority = ['AHAs', 'Hyaluronic Acid', 'Vitamin C'];
                                } else {
                                    productsRecommend = ['APC Cleanser', 'AEA Mask', 'AEA Moisturiser'];
                                    activePriority = ['AHAs', 'Vitamin C', 'Vegan Squalane'];
                                }
                                break;
                            case skinTypeQuestions[1]: //A combination of shiny and dry on different areas
                                if (envStressResult.title === 'LOW' || envStressResult.title === 'AVERAGE') {
                                    productsRecommend = ['APC Cleanser', 'AEA Serum', 'TSW Cream'];
                                    activePriority = ['AHAs', 'Vitamin C', 'Hyaluronic Acid'];
                                } else {
                                    productsRecommend = ['APC Cleanser', 'AEA Mask', 'TSW Cream'];
                                    activePriority = ['AHAs', 'Vitamin C', 'Hyaluronic Acid'];
                                }
                                break;
                            case skinTypeQuestions[2]: //Comfortable in summer, but dry in cooler climates
                                if (envStressResult.title === 'LOW' || envStressResult.title === 'AVERAGE') {
                                    productsRecommend = ['AEA Enzyme Polish', 'AEA Mask', 'AEA Moisturiser'];
                                    activePriority = ['AHAs', 'Hyaluronic Acid', 'Vitamin C'];
                                } else {
                                    productsRecommend = ['AEA Enzyme Polish', 'AEA Mask', 'TSW Night Cream'];
                                    activePriority = ['AHAs', 'Vitamin C', 'Hyaluronic Acid'];
                                }
                                break;
                            default: //Red and flaky with uneven texture
                                if (envStressResult.title === 'LOW' || envStressResult.title === 'AVERAGE') {
                                    productsRecommend = ['AEA Enzyme Polish', 'AEA Serum', 'AEA Moisturiser'];
                                    activePriority = ['AHAs', 'Vitamin C', 'Vegan Squalane'];
                                } else {
                                    productsRecommend = ['AEA Mask', 'TSW Serum', 'TSW Cream'];
                                    activePriority = ['Vitamin C', 'AHAs', 'Hyaluronic Acid'];
                                }
                                break;
                        }
                        break;
                }
                break;
            case skinConcernsQ[7]: //Dark spots or hyperpigmentation
                switch (ageRangesA) {
                    case ageRanges[0]:// <20, 20-25
                    case ageRanges[1]:
                        switch (skinTypeAnswer) {
                            case skinTypeQuestions[0]: //Tends to get shiny throughout the day
                                if (envStressResult.title === 'LOW' || envStressResult.title === 'AVERAGE') {
                                    productsRecommend = ['AEA Enzyme Polish', 'AEA Serum', 'AEA Moisturiser'];
                                    activePriority = ['Vitamin C', 'Hyaluronic Acid', 'Vegan Squalane'];
                                } else {
                                    productsRecommend = ['APC Cleanser', 'APC Mask', 'AEA Serum'];
                                    activePriority = ['AHAs', 'Vitamin E', 'Hyaluronic Acid'];
                                }
                                break;
                            case skinTypeQuestions[1]: //A combination of shiny and dry on different areas
                                if (envStressResult.title === 'LOW' || envStressResult.title === 'AVERAGE') {
                                    productsRecommend = ['APC Cleanser', 'AEA Serum', 'TSW Cream'];
                                    activePriority = ['AHAs', 'Vitamin C', 'Hyaluronic Acid'];
                                } else {
                                    productsRecommend = ['APC Cleanser', 'AEA Mask', 'AEA Moisturiser'];
                                    activePriority = ['AHAs', 'Vitamin C', 'Vegan Squalane'];
                                }
                                break;
                            case skinTypeQuestions[2]: //Comfortable in summer, but dry in cooler climates
                                if (envStressResult.title === 'LOW' || envStressResult.title === 'AVERAGE') {
                                    productsRecommend = ['AEA Enzyme Polish', 'AEA Mask', 'AEA Moisturiser'];
                                    activePriority = ['AHAs', 'Hyaluronic Acid', 'Vitamin C'];
                                } else {
                                    productsRecommend = ['APC Cleanser', 'AEA Mask', 'AEA Serum'];
                                    activePriority = ['AHAs', 'Vitamin C', 'Hyaluronic Acid'];
                                }
                                break;
                            default: //Red and flaky with uneven texture
                                if (envStressResult.title === 'LOW' || envStressResult.title === 'AVERAGE') {
                                    productsRecommend = ['AEA Enzyme Polish', 'AEA Serum', 'TSW Cream'];
                                    activePriority = ['AHAs', 'Vitamin C', 'Hyaluronic Acid'];
                                } else {
                                    productsRecommend = ['APC Cleanser', 'AEA Mask', 'TSW Cream'];
                                    activePriority = ['AHAs', 'Vitamin C', 'Hyaluronic Acid'];
                                }
                                break;
                        }
                        break;
                    default://26-35, 36-45, >45
                        switch (skinTypeAnswer) {
                            case skinTypeQuestions[0]: //Tends to get shiny throughout the day
                                if (envStressResult.title === 'LOW' || envStressResult.title === 'AVERAGE') {
                                    productsRecommend = ['APC Cleanser', 'AEA Enzyme Polish', 'AEA Serum'];
                                    activePriority = ['AHAs', 'Vitamin C', 'Hyaluronic Acid'];
                                } else {
                                    productsRecommend = ['APC Cleanser', 'APC Mask', 'AEA Serum'];
                                    activePriority = ['AHAs', 'Vitamin E', 'Hyaluronic Acid'];
                                }
                                break;
                            case skinTypeQuestions[1]: //A combination of shiny and dry on different areas
                                if (envStressResult.title === 'LOW' || envStressResult.title === 'AVERAGE') {
                                    productsRecommend = ['APC Cleanser', 'AEA Serum', 'AEA Moisturiser'];
                                    activePriority = ['AHAs', 'Vitamin C', 'Vegan Squalane'];
                                } else {
                                    productsRecommend = ['APC Cleanser', 'AEA Mask', 'AEA Serum'];
                                    activePriority = ['AHAs', 'Vitamin C', 'Hyaluronic Acid'];
                                }
                                break;
                            case skinTypeQuestions[2]: //Comfortable in summer, but dry in cooler climates
                                if (envStressResult.title === 'LOW' || envStressResult.title === 'AVERAGE') {
                                    productsRecommend = ['AEA Enzyme Polish', 'AEA Mask', 'AEA Serum'];
                                    activePriority = ['AHAs', 'Hyaluronic Acid', 'Vitamin C'];
                                } else {
                                    productsRecommend = ['AEA Enzyme Polish', 'AEA Mask', 'AEA Serum'];
                                    activePriority = ['AHAs', 'Hyaluronic Acid', 'Vitamin C'];
                                }
                                break;
                            default: //Red and flaky with uneven texture
                                if (envStressResult.title === 'LOW' || envStressResult.title === 'AVERAGE') {
                                    productsRecommend = ['AEA Enzyme Polish', 'AEA Serum', 'AEA Moisturiser'];
                                    activePriority = ['AHAs', 'Vitamin C', 'Vegan Squalane'];
                                } else {
                                    productsRecommend = ['APC Cleanser', 'AEA Mask', 'TSW Cream'];
                                    activePriority = ['AHAs', 'Vitamin C', 'Hyaluronic Acid'];
                                }
                                break;
                        }
                        break;
                }
                break;
            default: //Dullness or uneven skin tone
                switch (ageRangesA) {
                    case ageRanges[0]:// <20, 20-25
                    case ageRanges[1]:
                        switch (skinTypeAnswer) {
                            case skinTypeQuestions[0]: //Tends to get shiny throughout the day
                                if (envStressResult.title === 'LOW' || envStressResult.title === 'AVERAGE') {
                                    productsRecommend = ['APC Cleanser', 'APC Mask', 'AEA Serum'];
                                    activePriority = ['AHAs', 'Vitamin E', 'Vitamin C'];
                                } else {
                                    productsRecommend = ['AEA Enzyme Polish', 'OC Mask', 'AEA Serum'];
                                    activePriority = ['AHAs', 'Salicylic Acid', 'Vitamin C'];
                                }
                                break;
                            case skinTypeQuestions[1]: //A combination of shiny and dry on different areas
                                if (envStressResult.title === 'LOW' || envStressResult.title === 'AVERAGE') {
                                    productsRecommend = ['APC Cleanser', 'AEA Serum', 'AEA Moisturiser'];
                                    activePriority = ['AHAs', 'Vitamin C', 'Vegan Squalane'];
                                } else {
                                    productsRecommend = ['APC Cleanser', 'AEA Mask', 'AEA Serum'];
                                    activePriority = ['AHAs', 'Hyaluronic Acid', 'Vitamin C'];
                                }
                                break;
                            case skinTypeQuestions[2]: //Comfortable in summer, but dry in cooler climates
                                if (envStressResult.title === 'LOW' || envStressResult.title === 'AVERAGE') {
                                    productsRecommend = ['APC Cleanser', 'AEA Mask', 'AEA Moisturiser'];
                                    activePriority = ['AHAs', 'Hyaluronic Acid', 'Vitamin C'];
                                } else {
                                    productsRecommend = ['APC Cleanser', 'AEA Mask', 'AEA Moisturiser'];
                                    activePriority = ['AHAs', 'Hyaluronic Acid', 'Vitamin C'];
                                }
                                break;
                            default: //Red and flaky with uneven texture
                                if (envStressResult.title === 'LOW' || envStressResult.title === 'AVERAGE') {
                                    productsRecommend = ['APC Exfoliator', 'AEA Serum', 'TSW Cream'];
                                    activePriority = ['AHAs', 'Vitamin C', 'Hyaluronic Acid'];
                                } else {
                                    productsRecommend = ['APC Exfoliator', 'AEA Mask', 'AEA Serum'];
                                    activePriority = ['AHAs', 'Hyaluronic Acid', 'Vitamin C'];
                                }
                                break;
                        }
                        break;
                    default://26-35, 36-45, >45
                        switch (skinTypeAnswer) {
                            case skinTypeQuestions[0]: //Tends to get shiny throughout the day
                                if (envStressResult.title === 'LOW' || envStressResult.title === 'AVERAGE') {
                                    productsRecommend = ['APC Cleanser', 'AEA Enzyme Polish', 'AEA Serum'];
                                    activePriority = ['AHAs', 'Vitamin C', 'Hyaluronic Acid'];
                                } else {
                                    productsRecommend = ['AEA Enzyme Polish', 'OC Mask', 'AEA Serum'];
                                    activePriority = ['AHAs', 'Salicylic Acid', 'Vitamin C'];
                                }
                                break;
                            case skinTypeQuestions[1]: //A combination of shiny and dry on different areas
                                if (envStressResult.title === 'LOW' || envStressResult.title === 'AVERAGE') {
                                    productsRecommend = ['APC Cleanser', 'AEA Serum', 'AEA Moisturiser'];
                                    activePriority = ['AHAs', 'Vitamin C', 'Vegan Squalane'];
                                } else {
                                    productsRecommend = ['APC Cleanser', 'AEA Mask', 'AEA Serum'];
                                    activePriority = ['AHAs', 'Hyaluronic Acid', 'Vitamin C'];
                                }
                                break;
                            case skinTypeQuestions[2]: //Comfortable in summer, but dry in cooler climates
                                if (envStressResult.title === 'LOW' || envStressResult.title === 'AVERAGE') {
                                    productsRecommend = ['AEA Enzyme Polish', 'AEA Mask', 'AEA Moisturiser'];
                                    activePriority = ['AHAs', 'Hyaluronic Acid', 'Vitamin C'];
                                } else {
                                    productsRecommend = ['AEA Enzyme Polish', 'AEA Mask', 'AEA Moisturiser'];
                                    activePriority = ['AHAs', 'Hyaluronic Acid', 'Vitamin C'];
                                }
                                break;
                            default: //Red and flaky with uneven texture
                                if (envStressResult.title === 'LOW' || envStressResult.title === 'AVERAGE') {
                                    productsRecommend = ['AEA Enzyme Polish', 'AEA Serum', 'AEA Moisturiser'];
                                    activePriority = ['AHAs', 'Hyaluronic Acid', 'Vitamin C'];
                                } else {
                                    productsRecommend = ['AEA Enzyme Polish', 'TSW Mask', 'AEA Serum'];
                                    activePriority = ['AHAs', 'Hyaluronic Acid', 'Vitamin C'];
                                }
                                break;
                        }
                        break;
                }
                break;
        }
	return {productsRecommend, activePriority}
};

const getProductResult = (Questions, currentAnswer) => {
	return getProductRecommendation(Questions, currentAnswer);
};

export default getProductResult;
