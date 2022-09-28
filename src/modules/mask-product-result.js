const getMaskProductResult = (Questions, currentAnswer) => {
    let productsRecommend = [];

    const skinFeelO = Questions[0].answers;
    const skinFeelA = currentAnswer[1];
    const waterO = Questions[1].answers;
    const waterA = currentAnswer[2];

    const climateO = Questions[2].answers;
    const climateA = currentAnswer[3];

    const skinConcertO = Questions[3].answers;
    const skinConcertA = currentAnswer[4];
    switch (skinFeelA) {
        case skinFeelO[0]:
            switch (skinConcertA) {
                case skinConcertO[0]:
                    switch (climateA) {
                        case climateO[0]:
                            switch (waterA) {
                                case waterO[0]:
                                    productsRecommend = ['TSW Mask'];
                                    break;
                                case waterO[1]:
                                    productsRecommend = ['TSW Mask'];
                                    break;
                                case waterO[2]:
                                    productsRecommend = ['APC Mask'];
                                    break;
                                case waterO[3]:
                                    productsRecommend = ['APC Mask'];
                                    break;
                            }
                            break;
                        case climateO[1]:
                            switch (waterA) {
                                case waterO[0]:
                                    productsRecommend = ['TSW Mask'];
                                    break;
                                case waterO[1]:
                                    productsRecommend = ['TSW Mask'];
                                    break;
                                case waterO[2]:
                                    productsRecommend = ['APC Mask'];
                                    break;
                                case waterO[3]:
                                    productsRecommend = ['APC Mask'];
                                    break;
                            }
                            break;
                        case climateO[2]:
                            productsRecommend = ['TSW Mask'];
                            break;
                        case climateO[3]:
                            productsRecommend = ['APC Mask'];
                            break;
                    }
                    break;
                case skinConcertO[1]:
                    productsRecommend = ['AEA Mask'];
                    break;
                case skinConcertO[2]:
                    switch (waterA) {
                        case waterO[0]:
                            productsRecommend = ['TSW Mask'];
                            break;
                        case waterO[1]:
                            productsRecommend = ['TSW Mask'];
                            break;
                        default:
                            productsRecommend = ['AEA Mask'];
                            break;
                    }
                    break;
                case skinConcertO[3]:
                    productsRecommend = ['TSW Mask'];
                    break;
                case skinConcertO[4]:
                    productsRecommend = ['OC Mask'];
                    break;
                case skinConcertO[5]:
                    switch (climateA) {
                        case climateO[0]:
                            switch (waterA) {
                                case waterO[0]:
                                    productsRecommend = ['OC Mask'];
                                    break;
                                case waterO[1]:
                                    productsRecommend = ['OC Mask'];
                                    break;
                                default:
                                    productsRecommend = ['APC Mask'];
                                    break;
                            }
                            break;
                        case climateO[1]:
                            switch (waterA) {
                                case waterO[0]:
                                    productsRecommend = ['OC Mask'];
                                    break;
                                case waterO[1]:
                                    productsRecommend = ['OC Mask'];
                                    break;
                                default:
                                    productsRecommend = ['APC Mask'];
                                    break;
                            }
                            break;
                        default:
                            switch (waterA) {
                                case waterO[0]:
                                    productsRecommend = ['OC Mask'];
                                    break;
                                case waterO[1]:
                                    productsRecommend = ['OC Mask'];
                                    break;
                                default:
                                    productsRecommend = ['APC Mask'];
                                    break;
                            }
                            break;
                    }
                    break;
            }
            break;
        case skinFeelO[1]:
            switch (skinConcertA) {
                case skinConcertO[0]:
                    switch (climateA) {
                        case climateO[0]:
                            switch (waterA) {
                                case waterO[0]:
                                    productsRecommend = ['APC Mask'];
                                    break;
                                case waterO[1]:
                                    productsRecommend = ['APC Mask'];
                                    break;
                                default:
                                    productsRecommend = ['OC Mask'];
                                    break;
                            }
                            break;
                        case climateO[1]:
                            switch (waterA) {
                                case waterO[0]:
                                    productsRecommend = ['APC Mask'];
                                    break;
                                case waterO[1]:
                                    productsRecommend = ['APC Mask'];
                                    break;
                                default:
                                    productsRecommend = ['OC Mask'];
                                    break;
                            }
                            break;
                        default:
                            productsRecommend = ['OC Mask'];
                            break;
                    }
                    break;
                case skinConcertO[1]:
                    switch (waterA) {
                        case waterO[0]:
                            productsRecommend = ['TSW Mask'];
                            break;
                        case waterO[1]:
                            productsRecommend = ['TSW Mask'];
                            break;
                        default:
                            productsRecommend = ['AEA Mask'];
                            break;
                    }
                    break;
                case skinConcertO[2]:
                    productsRecommend = ['AEA Mask'];
                    break;
                case skinConcertO[3]:
                    switch (climateA) {
                        case climateO[0]:
                            switch (waterA) {
                                case waterO[0]:
                                    productsRecommend = ['TSW Mask'];
                                    break;
                                case waterO[1]:
                                    productsRecommend = ['TSW Mask'];
                                    break;
                                default:
                                    productsRecommend = ['APC Mask'];
                                    break;
                            }
                            break;
                        case climateO[1]:
                            switch (waterA) {
                                case waterO[0]:
                                    productsRecommend = ['TSW Mask'];
                                    break;
                                case waterO[1]:
                                    productsRecommend = ['TSW Mask'];
                                    break;
                                default:
                                    productsRecommend = ['APC Mask'];
                                    break;
                            }
                            break;
                        default:
                            productsRecommend = ['TSW Mask'];
                            break;
                    }
                    break;
                case skinConcertO[4]:
                    productsRecommend = ['OC Mask'];
                    break;
                case skinConcertO[5]:
                    switch (climateA) {
                        case climateO[0]:
                            switch (waterA) {
                                case waterO[0]:
                                    productsRecommend = ['APC Mask'];
                                    break;
                                case waterO[1]:
                                    productsRecommend = ['APC Mask'];
                                    break;
                                default:
                                    productsRecommend = ['OC Mask'];
                                    break;
                            }
                            break;
                        case climateO[1]:
                            switch (waterA) {
                                case waterO[0]:
                                    productsRecommend = ['APC Mask'];
                                    break;
                                case waterO[1]:
                                    productsRecommend = ['APC Mask'];
                                    break;
                                default:
                                    productsRecommend = ['OC Mask'];
                                    break;
                            }
                            break;
                        default:
                            switch (waterA) {
                                case waterO[0]:
                                    productsRecommend = ['APC Mask'];
                                    break;
                                case waterO[1]:
                                    productsRecommend = ['APC Mask'];
                                    break;
                                default:
                                    productsRecommend = ['OC Mask'];
                                    break;
                            }
                            break;
                    }
                    break;
            }
            break;
        case skinFeelO[2]:
            switch (skinConcertA) {
                case skinConcertO[0]:
                    switch (climateA) {
                        case climateO[0]:
                            switch (waterA) {
                                case waterO[0]:
                                    productsRecommend = ['APC Mask'];
                                    break;
                                case waterO[1]:
                                    productsRecommend = ['APC Mask'];
                                    break;
                                default:
                                    productsRecommend = ['OC Mask'];
                                    break;
                            }
                            break;
                        case climateO[1]:
                            switch (waterA) {
                                case waterO[0]:
                                    productsRecommend = ['APC Mask'];
                                    break;
                                case waterO[1]:
                                    productsRecommend = ['APC Mask'];
                                    break;
                                default:
                                    productsRecommend = ['OC Mask'];
                                    break;
                            }
                            break;
                        default:
                            productsRecommend = ['OC Mask'];
                            break;
                    }
                    break;
                case skinConcertO[1]:
                    switch (climateA) {
                        case climateO[2]:
                            productsRecommend = ['OC Mask'];
                            break;
                        default:
                            productsRecommend = ['AEA Mask'];
                            break;
                    }
                    break;
                case skinConcertO[2]:
                    switch (waterA) {
                        case waterO[0]:
                            productsRecommend = ['AEA Mask'];
                            break;
                        case waterO[1]:
                            productsRecommend = ['AEA Mask'];
                            break;
                        default:
                            productsRecommend = ['OC Mask'];
                            break;
                    }
                    break;
                case skinConcertO[3]:
                    switch (climateA) {
                        case climateO[2]:
                            productsRecommend = ['TSW Mask'];
                            break;
                        case climateO[3]:
                            productsRecommend = ['TSW Mask'];
                            break;
                        default:
                            switch (waterA) {
                                case waterO[0]:
                                    productsRecommend = ['TSW Mask'];
                                    break;
                                case waterO[1]:
                                    productsRecommend = ['TSW Mask'];
                                    break;
                                default:
                                    productsRecommend = ['OC Mask'];
                                    break;
                            }
                            break;
                    }
                    break;
                case skinConcertO[4]:
                    productsRecommend = ['OC Mask'];
                    break;
                case skinConcertO[5]:
                    productsRecommend = ['OC Mask'];
                    break;
            }
            break;
        case skinFeelO[3]:
            switch (skinConcertA) {
                case skinConcertO[0]:
                    switch (climateA) {
                        case climateO[2]:
                            productsRecommend = ['OC Mask'];
                            break;
                        case climateO[3]:
                            productsRecommend = ['APC Mask'];
                            break;
                        default:
                            switch (waterA) {
                                case waterO[0]:
                                    productsRecommend = ['APC Mask'];
                                    break;
                                case waterO[1]:
                                    productsRecommend = ['APC Mask'];
                                    break;
                                default:
                                    productsRecommend = ['OC Mask'];
                                    break;
                            }
                            break;
                    }
                    break;
                case skinConcertO[1]:
                    switch (climateA) {
                        case climateO[3]:
                            productsRecommend = ['OC Mask'];
                            break;
                        default:
                            productsRecommend = ['AEA Mask'];
                            break;
                    }
                    break;
                case skinConcertO[2]:
                    productsRecommend = ['AEA Mask'];
                    break;
                case skinConcertO[3]:
                    productsRecommend = ['TSW Mask'];
                    break;
                case skinConcertO[4]:
                    productsRecommend = ['OC Mask'];
                    break;
                case skinConcertO[5]:
                    productsRecommend = ['OC Mask'];
                    break;  
            }
            break;
        case skinFeelO[4]:
            switch (skinConcertA) {
                case skinConcertO[0]:
                    productsRecommend = ['APC Mask'];
                    break;
                case skinConcertO[1]:
                    productsRecommend = ['TSW Mask'];
                    break;
                case skinConcertO[2]:
                    productsRecommend = ['AEA Mask'];
                    break;
                case skinConcertO[3]:
                    productsRecommend = ['TSW Mask'];
                    break;
                case skinConcertO[4]:
                    productsRecommend = ['OC Mask'];
                    break;
                case skinConcertO[5]:
                    productsRecommend = ['OC Mask'];
                    break;
            }
            break;
    }
   
	return { productsRecommend }
};

export default getMaskProductResult;