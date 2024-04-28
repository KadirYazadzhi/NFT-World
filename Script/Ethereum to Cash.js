document.addEventListener('DOMContentLoaded', function () {
    function getCryptoPrices() {
        fetch('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd')
            .then(response => response.json())
            .then(data => {
                const ethereumPrice = data['ethereum']['usd'];

                const info = document.getElementById("first-price-info");
                const infoNew = document.getElementById("second-price-info");
                info.dataset.ethereumPrice = ethereumPrice;
                infoNew.dataset.ethereumPrice = ethereumPrice;


                const infoThree = document.getElementById('third-price-info');
                const infoFour = document.getElementById('four-price-info');
                infoThree.dataset.ethereumPrice = ethereumPrice;
                infoFour.dataset.ethereumPrice = ethereumPrice;


                const infoFive = document.getElementById('five-price-info');
                const infoSix = document.getElementById('six-price-info');
                infoFive.dataset.ethereumPrice = ethereumPrice;
                infoSix.dataset.ethereumPrice = ethereumPrice;


                const infoSeven = document.getElementById('seven-price-info');
                const infoEight = document.getElementById('eight-price-info');
                infoSeven.dataset.ethereumPrice = ethereumPrice;
                infoEight.dataset.ethereumPrice = ethereumPrice;


                const infoNine = document.getElementById('nine-price-info');
                const infoTen = document.getElementById('ten-price-info');
                infoNine.dataset.ethereumPrice = ethereumPrice;
                infoTen.dataset.ethereumPrice = ethereumPrice;


                const infoEleven = document.getElementById('eleven-price-info');
                const infoTwelve = document.getElementById('twelve-price-info');
                infoEleven.dataset.ethereumPrice = ethereumPrice;
                infoTwelve.dataset.ethereumPrice = ethereumPrice;


                const infoThirteen = document.getElementById('thirteen-price-info');
                const infoFourteen = document.getElementById('fourteen-price-info');
                infoThirteen.dataset.ethereumPrice = ethereumPrice;
                infoFourteen.dataset.ethereumPrice = ethereumPrice;


                const infoFiveteen = document.getElementById('fiveteen-price-info');
                const infoSixteen = document.getElementById('sixteen-price-info');
                infoFiveteen.dataset.ethereumPrice = ethereumPrice;
                infoSixteen.dataset.ethereumPrice = ethereumPrice;


                const infoSeventeen = document.getElementById('seventeen-price-info');
                const infoEighteen = document.getElementById('eighteen-price-info');
                infoSeventeen.dataset.ethereumPrice = ethereumPrice;
                infoEighteen.dataset.ethereumPrice = ethereumPrice;


                const infoNineteen = document.getElementById('nineteen-price-info');
                const infoTwenty = document.getElementById('twenty-price-info');
                infoNineteen.dataset.ethereumPrice = ethereumPrice;
                infoTwenty.dataset.ethereumPrice = ethereumPrice;


                const infoTwentyOne = document.getElementById('twenty-one-price-info');
                const infoTwentyTwo = document.getElementById('twenty-two-price-info');
                infoTwentyOne.dataset.ethereumPrice = ethereumPrice;
                infoTwentyTwo.dataset.ethereumPrice = ethereumPrice;


                const infoTwentyThree = document.getElementById('twenty-three-price-info');
                const infoTwentyFour = document.getElementById('twenty-four-price-info');
                infoTwentyThree.dataset.ethereumPrice = ethereumPrice;
                infoTwentyFour.dataset.ethereumPrice = ethereumPrice;


                const infoTwentyFive = document.getElementById('twenty-five-price-info');
                const infoTwentySix = document.getElementById('twenty-six-price-info');
                infoTwentyFive.dataset.ethereumPrice = ethereumPrice;
                infoTwentySix.dataset.ethereumPrice = ethereumPrice;


                const infoTwentySeven = document.getElementById('twenty-seven-price-info');
                const infoTwentyEight = document.getElementById('twenty-eight-price-info');
                infoTwentySeven.dataset.ethereumPrice = ethereumPrice;
                infoTwentyEight.dataset.ethereumPrice = ethereumPrice;


                const infoTwentyNine = document.getElementById('twenty-nine-price-info');
                const infoThirty = document.getElementById('thirty-price-info');
                infoTwentyNine.dataset.ethereumPrice = ethereumPrice;
                infoThirty.dataset.ethereumPrice = ethereumPrice;


                const infoThirtyOne = document.getElementById('thirty-one-price-info');
                const infoThirtyTwo = document.getElementById('thirty-two-price-info');
                infoThirtyOne.dataset.ethereumPrice = ethereumPrice;
                infoThirtyTwo.dataset.ethereumPrice = ethereumPrice;


                const infoThirtyThree = document.getElementById('thirty-three-price-info');
                const infoThirtyFour = document.getElementById('thirty-four-price-info');
                infoThirtyThree.dataset.ethereumPrice = ethereumPrice;
                infoThirtyFour.dataset.ethereumPrice = ethereumPrice;


                const infoThirtyFive = document.getElementById('thirty-five-price-info');
                const infoThirtySix = document.getElementById('thirty-six-price-info');
                infoThirtyFive.dataset.ethereumPrice = ethereumPrice;
                infoThirtySix.dataset.ethereumPrice = ethereumPrice;


                const infoThirtySeven = document.getElementById('thirty-seven-price-info');
                const infoThirtyEight = document.getElementById('thirty-eight-price-info');
                infoThirtySeven.dataset.ethereumPrice = ethereumPrice;
                infoThirtyEight.dataset.ethereumPrice = ethereumPrice;


                const infoThirtyNine = document.getElementById('thirty-nine-price-info');
                const infoFourty = document.getElementById('fourty-price-info');
                infoThirtyNine.dataset.ethereumPrice = ethereumPrice;
                infoFourty.dataset.ethereumPrice = ethereumPrice;

            })
            .catch(error => console.error('Error fetching ethereum price:', error));
    }

    getCryptoPrices();
});



const firstElementButton = document.getElementById('first-eth-price-change');
firstElementButton.addEventListener("click", function () {
    var icon = document.getElementById("first-ethereum-icon");
    var info = document.getElementById("first-price-info");

    const ethereumPrice = parseFloat(info.dataset.ethereumPrice);

    if (icon.src.includes("Image/ethereum.svg")) {
        icon.src = "Image/dollar.svg";
        const ethAmount = parseFloat(info.textContent);
        const priceInUSD = ethAmount * ethereumPrice;
        info.textContent = priceInUSD.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    } else {
        icon.src = "Image/ethereum.svg";
        info.textContent = "10.5 ETH";
    }
});

const secondElementButton = document.getElementById('second-eth-price-change');
secondElementButton.addEventListener("click", function () {
    var newIcon = document.getElementById("second-ethereum-icon");
    var infoNew = document.getElementById("second-price-info");

    const ethereumPrice = parseFloat(infoNew.dataset.ethereumPrice);

    if (newIcon.src.includes("Image/ethereum.svg")) {
        newIcon.src = "Image/dollar.svg";
        const ethAmount = parseFloat(infoNew.textContent);
        const priceInUSD = ethAmount * ethereumPrice;
        infoNew.textContent = priceInUSD.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    } else {
        newIcon.src = "Image/ethereum.svg";
        infoNew.textContent = "7.5 ETH";
    }
});





const thirdElementButton = document.getElementById('third-eth-price-change');
thirdElementButton.addEventListener("click", function () {
    var IconThree = document.getElementById("third-ethereum-icon");
    var infoThree = document.getElementById("third-price-info");

    const ethereumPrice = parseFloat(infoThree.dataset.ethereumPrice);

    if (IconThree.src.includes("Image/ethereum.svg")) {
        IconThree.src = "Image/dollar.svg";
        const ethAmount = parseFloat(infoThree.textContent);
        const priceInUSD = ethAmount * ethereumPrice;
        infoThree.textContent = priceInUSD.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    } else {
        IconThree.src = "Image/ethereum.svg";
        infoThree.textContent = "8.5 ETH";
    }
});

const fourElementButton = document.getElementById('four-eth-price-change');
fourElementButton.addEventListener("click", function () {
    var IconFour = document.getElementById("four-ethereum-icon");
    var infoFour = document.getElementById("four-price-info");

    const ethereumPrice = parseFloat(infoFour.dataset.ethereumPrice);

    if (IconFour.src.includes("Image/ethereum.svg")) {
        IconFour.src = "Image/dollar.svg";
        const ethAmount = parseFloat(infoFour.textContent);
        const priceInUSD = ethAmount * ethereumPrice;
        infoFour.textContent = priceInUSD.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    } else {
        IconFour.src = "Image/ethereum.svg";
        infoFour.textContent = "6.55 ETH";
    }
});





const fiveElementButton = document.getElementById('five-eth-price-change');
fiveElementButton.addEventListener("click", function () {
    var IconFive = document.getElementById("five-ethereum-icon");
    var infoFive = document.getElementById("five-price-info");

    const ethereumPrice = parseFloat(infoFive.dataset.ethereumPrice);

    if (IconFive.src.includes("Image/ethereum.svg")) {
        IconFive.src = "Image/dollar.svg";
        const ethAmount = parseFloat(infoFive.textContent);
        const priceInUSD = ethAmount * ethereumPrice;
        infoFive.textContent = priceInUSD.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    } else {
        IconFive.src = "Image/ethereum.svg";
        infoFive.textContent = "8 ETH";
    }
});

const sixElementButton = document.getElementById('six-eth-price-change');
sixElementButton.addEventListener("click", function () {
    var IconSix = document.getElementById("six-ethereum-icon");
    var infoSix = document.getElementById("six-price-info");

    const ethereumPrice = parseFloat(infoSix.dataset.ethereumPrice);

    if (IconSix.src.includes("Image/ethereum.svg")) {
        IconSix.src = "Image/dollar.svg";
        const ethAmount = parseFloat(infoSix.textContent);
        const priceInUSD = ethAmount * ethereumPrice;
        infoSix.textContent = priceInUSD.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    } else {
        IconSix.src = "Image/ethereum.svg";
        infoSix.textContent = "7.5 ETH";
    }
});





const sevenElementButton = document.getElementById('seven-eth-price-change');
sevenElementButton.addEventListener("click", function () {
    var IconSeven = document.getElementById("seven-ethereum-icon");
    var infoSeven = document.getElementById("seven-price-info");

    const ethereumPrice = parseFloat(infoSeven.dataset.ethereumPrice);

    if (IconSeven.src.includes("Image/ethereum.svg")) {
        IconSeven.src = "Image/dollar.svg";
        const ethAmount = parseFloat(infoSeven.textContent);
        const priceInUSD = ethAmount * ethereumPrice;
        infoSeven.textContent = priceInUSD.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    } else {
        IconSeven.src = "Image/ethereum.svg";
        infoSeven.textContent = "7.5 ETH";
    }
});

const eightElementButton = document.getElementById('eight-eth-price-change');
eightElementButton.addEventListener("click", function () {
    var IconEight = document.getElementById("eight-ethereum-icon");
    var infoEight = document.getElementById("eight-price-info");

    const ethereumPrice = parseFloat(infoEight.dataset.ethereumPrice);

    if (IconEight.src.includes("Image/ethereum.svg")) {
        IconEight.src = "Image/dollar.svg";
        const ethAmount = parseFloat(infoEight.textContent);
        const priceInUSD = ethAmount * ethereumPrice;
        infoEight.textContent = priceInUSD.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    } else {
        IconEight.src = "Image/ethereum.svg";
        infoEight.textContent = "6 ETH";
    }
});





const nineElementButton = document.getElementById('nine-eth-price-change');
nineElementButton.addEventListener("click", function () {
    var IconNine = document.getElementById("nine-ethereum-icon");
    var infoNine = document.getElementById("nine-price-info");

    const ethereumPrice = parseFloat(infoNine.dataset.ethereumPrice);

    if (IconNine.src.includes("Image/ethereum.svg")) {
        IconNine.src = "Image/dollar.svg";
        const ethAmount = parseFloat(infoNine.textContent);
        const priceInUSD = ethAmount * ethereumPrice;
        infoNine.textContent = priceInUSD.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    } else {
        IconNine.src = "Image/ethereum.svg";
        infoNine.textContent = "7 ETH";
    }
});

const tenElementButton = document.getElementById('ten-eth-price-change');
tenElementButton.addEventListener("click", function () {
    var IconTen = document.getElementById("ten-ethereum-icon");
    var infoTen = document.getElementById("ten-price-info");

    const ethereumPrice = parseFloat(infoTen.dataset.ethereumPrice);

    if (IconTen.src.includes("Image/ethereum.svg")) {
        IconTen.src = "Image/dollar.svg";
        const ethAmount = parseFloat(infoTen.textContent);
        const priceInUSD = ethAmount * ethereumPrice;
        infoTen.textContent = priceInUSD.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    } else {
        IconTen.src = "Image/ethereum.svg";
        infoTen.textContent = "3.5 ETH";
    }
});





const elevenElementButton = document.getElementById('eleven-eth-price-change');
elevenElementButton.addEventListener("click", function () {
    var IconEleven = document.getElementById("eleven-ethereum-icon");
    var infoEleven = document.getElementById("eleven-price-info");

    const ethereumPrice = parseFloat(infoEleven.dataset.ethereumPrice);

    if (IconEleven.src.includes("Image/ethereum.svg")) {
        IconEleven.src = "Image/dollar.svg";
        const ethAmount = parseFloat(infoEleven.textContent);
        const priceInUSD = ethAmount * ethereumPrice;
        infoEleven.textContent = priceInUSD.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    } else {
        IconEleven.src = "Image/ethereum.svg";
        infoEleven.textContent = "6.85 ETH";
    }
});

const twelveElementButton = document.getElementById('twelve-eth-price-change');
twelveElementButton.addEventListener("click", function () {
    var IconTwelve = document.getElementById("twelve-ethereum-icon");
    var infoTwelve = document.getElementById("twelve-price-info");

    const ethereumPrice = parseFloat(infoTwelve.dataset.ethereumPrice);

    if (IconTwelve.src.includes("Image/ethereum.svg")) {
        IconTwelve.src = "Image/dollar.svg";
        const ethAmount = parseFloat(infoTwelve.textContent);
        const priceInUSD = ethAmount * ethereumPrice;
        infoTwelve.textContent = priceInUSD.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    } else {
        IconTwelve.src = "Image/ethereum.svg";
        infoTwelve.textContent = "5.55 ETH";
    }
});





const thirteenElementButton = document.getElementById('thirteen-eth-price-change');
thirteenElementButton.addEventListener("click", function () {
    var IconThirteen = document.getElementById("thirteen-ethereum-icon");
    var infoThirteen = document.getElementById("thirteen-price-info");

    const ethereumPrice = parseFloat(infoThirteen.dataset.ethereumPrice);

    if (IconThirteen.src.includes("Image/ethereum.svg")) {
        IconThirteen.src = "Image/dollar.svg";
        const ethAmount = parseFloat(infoThirteen.textContent);
        const priceInUSD = ethAmount * ethereumPrice;
        infoThirteen.textContent = priceInUSD.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    } else {
        IconThirteen.src = "Image/ethereum.svg";
        infoThirteen.textContent = "6.5 ETH";
    }
});

const fourteenElementButton = document.getElementById('fourteen-eth-price-change');
fourteenElementButton.addEventListener("click", function () {
    var IconFourteen = document.getElementById("fourteen-ethereum-icon");
    var infoFourteen = document.getElementById("fourteen-price-info");

    const ethereumPrice = parseFloat(infoFourteen.dataset.ethereumPrice);

    if (IconFourteen.src.includes("Image/ethereum.svg")) {
        IconFourteen.src = "Image/dollar.svg";
        const ethAmount = parseFloat(infoFourteen.textContent);
        const priceInUSD = ethAmount * ethereumPrice;
        infoFourteen.textContent = priceInUSD.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    } else {
        IconFourteen.src = "Image/ethereum.svg";
        infoFourteen.textContent = "4 ETH";
    }
});





const fiveteenElementButton = document.getElementById('fiveteen-eth-price-change');
fiveteenElementButton.addEventListener("click", function () {
    var IconFiveteen = document.getElementById("fiveteen-ethereum-icon");
    var infoFiveteen = document.getElementById("fiveteen-price-info");

    const ethereumPrice = parseFloat(infoFiveteen.dataset.ethereumPrice);

    if (IconFiveteen.src.includes("Image/ethereum.svg")) {
        IconFiveteen.src = "Image/dollar.svg";
        const ethAmount = parseFloat(infoFiveteen.textContent);
        const priceInUSD = ethAmount * ethereumPrice;
        infoFiveteen.textContent = priceInUSD.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    } else {
        IconFiveteen.src = "Image/ethereum.svg";
        infoFiveteen.textContent = "6 ETH";
    }
});

const sixteenElementButton = document.getElementById('sixteen-eth-price-change');
sixteenElementButton.addEventListener("click", function () {
    var IconSixteen = document.getElementById("sixteen-ethereum-icon");
    var infoSixteen = document.getElementById("sixteen-price-info");

    const ethereumPrice = parseFloat(infoSixteen.dataset.ethereumPrice);

    if (IconSixteen.src.includes("Image/ethereum.svg")) {
        IconSixteen.src = "Image/dollar.svg";
        const ethAmount = parseFloat(infoSixteen.textContent);
        const priceInUSD = ethAmount * ethereumPrice;
        infoSixteen.textContent = priceInUSD.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    } else {
        IconSixteen.src = "Image/ethereum.svg";
        infoSixteen.textContent = "4.85 ETH";
    }
});





const seventeenElementButton = document.getElementById('seventeen-eth-price-change');
seventeenElementButton.addEventListener("click", function () {
    var IconSeventeen = document.getElementById("seventeen-ethereum-icon");
    var infoSeventeen = document.getElementById("seventeen-price-info");

    const ethereumPrice = parseFloat(infoSeventeen.dataset.ethereumPrice);

    if (IconSeventeen.src.includes("Image/ethereum.svg")) {
        IconSeventeen.src = "Image/dollar.svg";
        const ethAmount = parseFloat(infoSeventeen.textContent);
        const priceInUSD = ethAmount * ethereumPrice;
        infoSeventeen.textContent = priceInUSD.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    } else {
        IconSeventeen.src = "Image/ethereum.svg";
        infoSeventeen.textContent = "5.85 ETH";
    }
});

const eighteenElementButton = document.getElementById('eighteen-eth-price-change');
eighteenElementButton.addEventListener("click", function () {
    var IconEighteen = document.getElementById("eighteen-ethereum-icon");
    var infoEighteen = document.getElementById("eighteen-price-info");

    const ethereumPrice = parseFloat(infoEighteen.dataset.ethereumPrice);

    if (IconEighteen.src.includes("Image/ethereum.svg")) {
        IconEighteen.src = "Image/dollar.svg";
        const ethAmount = parseFloat(infoEighteen.textContent);
        const priceInUSD = ethAmount * ethereumPrice;
        infoEighteen.textContent = priceInUSD.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    } else {
        IconEighteen.src = "Image/ethereum.svg";
        infoEighteen.textContent = "4.5 ETH";
    }
});





const nineteenElementButton = document.getElementById('nineteen-eth-price-change');
nineteenElementButton.addEventListener("click", function () {
    var IconNineteen = document.getElementById("nineteen-ethereum-icon");
    var infoNineteen = document.getElementById("nineteen-price-info");

    const ethereumPrice = parseFloat(infoNineteen.dataset.ethereumPrice);

    if (IconNineteen.src.includes("Image/ethereum.svg")) {
        IconNineteen.src = "Image/dollar.svg";
        const ethAmount = parseFloat(infoNineteen.textContent);
        const priceInUSD = ethAmount * ethereumPrice;
        infoNineteen.textContent = priceInUSD.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    } else {
        IconNineteen.src = "Image/ethereum.svg";
        infoNineteen.textContent = "5 ETH";
    }
});

const twentyElementButton = document.getElementById('twenty-eth-price-change');
twentyElementButton.addEventListener("click", function () {
    var IconTwenty = document.getElementById("twenty-ethereum-icon");
    var infoTwenty = document.getElementById("twenty-price-info");

    const ethereumPrice = parseFloat(infoTwenty.dataset.ethereumPrice);

    if (IconTwenty.src.includes("Image/ethereum.svg")) {
        IconTwenty.src = "Image/dollar.svg";
        const ethAmount = parseFloat(infoTwenty.textContent);
        const priceInUSD = ethAmount * ethereumPrice;
        infoTwenty.textContent = priceInUSD.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    } else {
        IconTwenty.src = "Image/ethereum.svg";
        infoTwenty.textContent = "2.5 ETH";
    }
});





const twentyOneElementButton = document.getElementById('twenty-one-eth-price-change');
twentyOneElementButton.addEventListener("click", function () {
    var IconTwentyOne = document.getElementById("twenty-one-ethereum-icon");
    var infoTwentyOne = document.getElementById("twenty-one-price-info");

    const ethereumPrice = parseFloat(infoTwentyOne.dataset.ethereumPrice);

    if (IconTwentyOne.src.includes("Image/ethereum.svg")) {
        IconTwentyOne.src = "Image/dollar.svg";
        const ethAmount = parseFloat(infoTwentyOne.textContent);
        const priceInUSD = ethAmount * ethereumPrice;
        infoTwentyOne.textContent = priceInUSD.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    } else {
        IconTwentyOne.src = "Image/ethereum.svg";
        infoTwentyOne.textContent = "4 ETH";
    }
});

const twentyTwoElementButton = document.getElementById('twenty-two-eth-price-change');
twentyTwoElementButton.addEventListener("click", function () {
    var IconTwentyTwo = document.getElementById("twenty-two-ethereum-icon");
    var infoTwentyTwo = document.getElementById("twenty-two-price-info");

    const ethereumPrice = parseFloat(infoTwentyTwo.dataset.ethereumPrice);

    if (IconTwentyTwo.src.includes("Image/ethereum.svg")) {
        IconTwentyTwo.src = "Image/dollar.svg";
        const ethAmount = parseFloat(infoTwentyTwo.textContent);
        const priceInUSD = ethAmount * ethereumPrice;
        infoTwentyTwo.textContent = priceInUSD.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    } else {
        IconTwentyTwo.src = "Image/ethereum.svg";
        infoTwentyTwo.textContent = "2 ETH";
    }
});





const twentyThreeElementButton = document.getElementById('twenty-three-eth-price-change');
twentyThreeElementButton.addEventListener("click", function () {
    var IconTwentyThree = document.getElementById("twenty-three-ethereum-icon");
    var infoTwentyThree = document.getElementById("twenty-three-price-info");

    const ethereumPrice = parseFloat(infoTwentyThree.dataset.ethereumPrice);

    if (IconTwentyThree.src.includes("Image/ethereum.svg")) {
        IconTwentyThree.src = "Image/dollar.svg";
        const ethAmount = parseFloat(infoTwentyThree.textContent);
        const priceInUSD = ethAmount * ethereumPrice;
        infoTwentyThree.textContent = priceInUSD.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    } else {
        IconTwentyThree.src = "Image/ethereum.svg";
        infoTwentyThree.textContent = "3 ETH";
    }
});

const twentyFourElementButton = document.getElementById('twenty-four-eth-price-change');
twentyFourElementButton.addEventListener("click", function () {
    var IconTwentyFour = document.getElementById("twenty-four-ethereum-icon");
    var infoTwentyFour = document.getElementById("twenty-four-price-info");

    const ethereumPrice = parseFloat(infoTwentyFour.dataset.ethereumPrice);

    if (IconTwentyFour.src.includes("Image/ethereum.svg")) {
        IconTwentyFour.src = "Image/dollar.svg";
        const ethAmount = parseFloat(infoTwentyFour.textContent);
        const priceInUSD = ethAmount * ethereumPrice;
        infoTwentyFour.textContent = priceInUSD.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    } else {
        IconTwentyFour.src = "Image/ethereum.svg";
        infoTwentyFour.textContent = "1.5 ETH";
    }
});





const twentyFiveElementButton = document.getElementById('twenty-five-eth-price-change');
twentyFiveElementButton.addEventListener("click", function () {
    var IconTwentyFive = document.getElementById("twenty-five-ethereum-icon");
    var infoTwentyFive = document.getElementById("twenty-five-price-info");

    const ethereumPrice = parseFloat(infoTwentyFive.dataset.ethereumPrice);

    if (IconTwentyFive.src.includes("Image/ethereum.svg")) {
        IconTwentyFive.src = "Image/dollar.svg";
        const ethAmount = parseFloat(infoTwentyFive.textContent);
        const priceInUSD = ethAmount * ethereumPrice;
        infoTwentyFive.textContent = priceInUSD.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    } else {
        IconTwentyFive.src = "Image/ethereum.svg";
        infoTwentyFive.textContent = "2 ETH";
    }
});

const twentySixElementButton = document.getElementById('twenty-six-eth-price-change');
twentySixElementButton.addEventListener("click", function () {
    var IconTwentySix = document.getElementById("twenty-six-ethereum-icon");
    var infoTwentySix = document.getElementById("twenty-six-price-info");

    const ethereumPrice = parseFloat(infoTwentySix.dataset.ethereumPrice);

    if (IconTwentySix.src.includes("Image/ethereum.svg")) {
        IconTwentySix.src = "Image/dollar.svg";
        const ethAmount = parseFloat(infoTwentySix.textContent);
        const priceInUSD = ethAmount * ethereumPrice;
        infoTwentySix.textContent = priceInUSD.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    } else {
        IconTwentySix.src = "Image/ethereum.svg";
        infoTwentySix.textContent = "1.5 ETH";
    }
});





const twentySevenElementButton = document.getElementById('twenty-seven-eth-price-change');
twentySevenElementButton.addEventListener("click", function () {
    var IconTwentySeven = document.getElementById("twenty-seven-ethereum-icon");
    var infoTwentySeven = document.getElementById("twenty-seven-price-info");

    const ethereumPrice = parseFloat(infoTwentySeven.dataset.ethereumPrice);

    if (IconTwentySeven.src.includes("Image/ethereum.svg")) {
        IconTwentySeven.src = "Image/dollar.svg";
        const ethAmount = parseFloat(infoTwentySeven.textContent);
        const priceInUSD = ethAmount * ethereumPrice;
        infoTwentySeven.textContent = priceInUSD.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    } else {
        IconTwentySeven.src = "Image/ethereum.svg";
        infoTwentySeven.textContent = "1.85 ETH";
    }
});

const twentyEightElementButton = document.getElementById('twenty-eight-eth-price-change');
twentyEightElementButton.addEventListener("click", function () {
    var IconTwentyEight = document.getElementById("twenty-eight-ethereum-icon");
    var infoTwentyEight = document.getElementById("twenty-eight-price-info");

    const ethereumPrice = parseFloat(infoTwentyEight.dataset.ethereumPrice);

    if (IconTwentyEight.src.includes("Image/ethereum.svg")) {
        IconTwentyEight.src = "Image/dollar.svg";
        const ethAmount = parseFloat(infoTwentyEight.textContent);
        const priceInUSD = ethAmount * ethereumPrice;
        infoTwentyEight.textContent = priceInUSD.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    } else {
        IconTwentyEight.src = "Image/ethereum.svg";
        infoTwentyEight.textContent = "1.25 ETH";
    }
});





const twentyNineElementButton = document.getElementById('twenty-nine-eth-price-change');
twentyNineElementButton.addEventListener("click", function () {
    var IconTwentyNine = document.getElementById("twenty-nine-ethereum-icon");
    var infoTwentyNine = document.getElementById("twenty-nine-price-info");

    const ethereumPrice = parseFloat(infoTwentyNine.dataset.ethereumPrice);

    if (IconTwentyNine.src.includes("Image/ethereum.svg")) {
        IconTwentyNine.src = "Image/dollar.svg";
        const ethAmount = parseFloat(infoTwentyNine.textContent);
        const priceInUSD = ethAmount * ethereumPrice;
        infoTwentyNine.textContent = priceInUSD.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    } else {
        IconTwentyNine.src = "Image/ethereum.svg";
        infoTwentyNine.textContent = "1.85 ETH";
    }
});

const thirtyElementButton = document.getElementById('thirty-eth-price-change');
thirtyElementButton.addEventListener("click", function () {
    var IconThirty = document.getElementById("thirty-ethereum-icon");
    var infoThirty = document.getElementById("thirty-price-info");

    const ethereumPrice = parseFloat(infoThirty.dataset.ethereumPrice);

    if (IconThirty.src.includes("Image/ethereum.svg")) {
        IconThirty.src = "Image/dollar.svg";
        const ethAmount = parseFloat(infoThirty.textContent);
        const priceInUSD = ethAmount * ethereumPrice;
        infoThirty.textContent = priceInUSD.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    } else {
        IconThirty.src = "Image/ethereum.svg";
        infoThirty.textContent = "1.25 ETH";
    }
});





const thirtyOneElementButton = document.getElementById('thirty-one-eth-price-change');
thirtyOneElementButton.addEventListener("click", function () {
    var IconThirtyOne = document.getElementById("thirty-one-ethereum-icon");
    var infoThirtyOne = document.getElementById("thirty-one-price-info");

    const ethereumPrice = parseFloat(infoThirtyOne.dataset.ethereumPrice);

    if (IconThirtyOne.src.includes("Image/ethereum.svg")) {
        IconThirtyOne.src = "Image/dollar.svg";
        const ethAmount = parseFloat(infoThirtyOne.textContent);
        const priceInUSD = ethAmount * ethereumPrice;
        infoThirtyOne.textContent = priceInUSD.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    } else {
        IconThirtyOne.src = "Image/ethereum.svg";
        infoThirtyOne.textContent = "1.55 ETH";
    }
});

const thirtyTwoElementButton = document.getElementById('thirty-two-eth-price-change');
thirtyTwoElementButton.addEventListener("click", function () {
    var IconThirtyTwo = document.getElementById("thirty-two-ethereum-icon");
    var infoThirtyTwo = document.getElementById("thirty-two-price-info");

    const ethereumPrice = parseFloat(infoThirtyTwo.dataset.ethereumPrice);

    if (IconThirtyTwo.src.includes("Image/ethereum.svg")) {
        IconThirtyTwo.src = "Image/dollar.svg";
        const ethAmount = parseFloat(infoThirtyTwo.textContent);
        const priceInUSD = ethAmount * ethereumPrice;
        infoThirtyTwo.textContent = priceInUSD.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    } else {
        IconThirtyTwo.src = "Image/ethereum.svg";
        infoThirtyTwo.textContent = "1.55 ETH";
    }
});





const thirtyThreeElementButton = document.getElementById('thirty-three-eth-price-change');
thirtyThreeElementButton.addEventListener("click", function () {
    var IconThirtyThree = document.getElementById("thirty-three-ethereum-icon");
    var infoThirtyThree = document.getElementById("thirty-three-price-info");

    const ethereumPrice = parseFloat(infoThirtyThree.dataset.ethereumPrice);

    if (IconThirtyThree.src.includes("Image/ethereum.svg")) {
        IconThirtyThree.src = "Image/dollar.svg";
        const ethAmount = parseFloat(infoThirtyThree.textContent);
        const priceInUSD = ethAmount * ethereumPrice;
        infoThirtyThree.textContent = priceInUSD.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    } else {
        IconThirtyThree.src = "Image/ethereum.svg";
        infoThirtyThree.textContent = "1.25 ETH";
    }
});

const thirtyFourElementButton = document.getElementById('thirty-four-eth-price-change');
thirtyFourElementButton.addEventListener("click", function () {
    var IconThirtyFour = document.getElementById("thirty-four-ethereum-icon");
    var infoThirtyFour = document.getElementById("thirty-four-price-info");

    const ethereumPrice = parseFloat(infoThirtyFour.dataset.ethereumPrice);

    if (IconThirtyFour.src.includes("Image/ethereum.svg")) {
        IconThirtyFour.src = "Image/dollar.svg";
        const ethAmount = parseFloat(infoThirtyFour.textContent);
        const priceInUSD = ethAmount * ethereumPrice;
        infoThirtyFour.textContent = priceInUSD.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    } else {
        IconThirtyFour.src = "Image/ethereum.svg";
        infoThirtyFour.textContent = "1 ETH";
    }
});





const thirtyFiveElementButton = document.getElementById('thirty-five-eth-price-change');
thirtyFiveElementButton.addEventListener("click", function () {
    var IconThirtyFive = document.getElementById("thirty-five-ethereum-icon");
    var infoThirtyFive = document.getElementById("thirty-five-price-info");

    const ethereumPrice = parseFloat(infoThirtyFive.dataset.ethereumPrice);

    if (IconThirtyFive.src.includes("Image/ethereum.svg")) {
        IconThirtyFive.src = "Image/dollar.svg";
        const ethAmount = parseFloat(infoThirtyFive.textContent);
        const priceInUSD = ethAmount * ethereumPrice;
        infoThirtyFive.textContent = priceInUSD.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    } else {
        IconThirtyFive.src = "Image/ethereum.svg";
        infoThirtyFive.textContent = "0.95 ETH";
    }
});

const thirtySixElementButton = document.getElementById('thirty-six-eth-price-change');
thirtySixElementButton.addEventListener("click", function () {
    var IconThirtySix = document.getElementById("thirty-six-ethereum-icon");
    var infoThirtySix = document.getElementById("thirty-six-price-info");

    const ethereumPrice = parseFloat(infoThirtySix.dataset.ethereumPrice);

    if (IconThirtySix.src.includes("Image/ethereum.svg")) {
        IconThirtySix.src = "Image/dollar.svg";
        const ethAmount = parseFloat(infoThirtySix.textContent);
        const priceInUSD = ethAmount * ethereumPrice;
        infoThirtySix.textContent = priceInUSD.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    } else {
        IconThirtySix.src = "Image/ethereum.svg";
        infoThirtySix.textContent = "0.6 ETH";
    }
});





const thirtySevenElementButton = document.getElementById('thirty-seven-eth-price-change');
thirtySevenElementButton.addEventListener("click", function () {
    var IconThirtySeven = document.getElementById("thirty-seven-ethereum-icon");
    var infoThirtySeven = document.getElementById("thirty-seven-price-info");

    const ethereumPrice = parseFloat(infoThirtySeven.dataset.ethereumPrice);

    if (IconThirtySeven.src.includes("Image/ethereum.svg")) {
        IconThirtySeven.src = "Image/dollar.svg";
        const ethAmount = parseFloat(infoThirtySeven.textContent);
        const priceInUSD = ethAmount * ethereumPrice;
        infoThirtySeven.textContent = priceInUSD.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    } else {
        IconThirtySeven.src = "Image/ethereum.svg";
        infoThirtySeven.textContent = "0.5 ETH";
    }
});

const thirtyEightElementButton = document.getElementById('thirty-eight-eth-price-change');
thirtyEightElementButton.addEventListener("click", function () {
    var IconThirtyEight = document.getElementById("thirty-eight-ethereum-icon");
    var infoThirtyEight = document.getElementById("thirty-eight-price-info");

    const ethereumPrice = parseFloat(infoThirtyEight.dataset.ethereumPrice);

    if (IconThirtyEight.src.includes("Image/ethereum.svg")) {
        IconThirtyEight.src = "Image/dollar.svg";
        const ethAmount = parseFloat(infoThirtyEight.textContent);
        const priceInUSD = ethAmount * ethereumPrice;
        infoThirtyEight.textContent = priceInUSD.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    } else {
        IconThirtyEight.src = "Image/ethereum.svg";
        infoThirtyEight.textContent = "0.25 ETH";
    }
});





const thirtyNineElementButton = document.getElementById('thirty-nine-eth-price-change');
thirtyNineElementButton.addEventListener("click", function () {
    var IconThirtyNine = document.getElementById("thirty-nine-ethereum-icon");
    var infoThirtyNine = document.getElementById("thirty-nine-price-info");

    const ethereumPrice = parseFloat(infoThirtyNine.dataset.ethereumPrice);

    if (IconThirtyNine.src.includes("Image/ethereum.svg")) {
        IconThirtyNine.src = "Image/dollar.svg";
        const ethAmount = parseFloat(infoThirtyNine.textContent);
        const priceInUSD = ethAmount * ethereumPrice;
        infoThirtyNine.textContent = priceInUSD.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    } else {
        IconThirtyNine.src = "Image/ethereum.svg";
        infoThirtyNine.textContent = "0.1 ETH";
    }
});

const fourtyElementButton = document.getElementById('fourty-eth-price-change');
fourtyElementButton.addEventListener("click", function () {
    var IconFourty = document.getElementById("fourty-ethereum-icon");
    var infoFourty = document.getElementById("fourty-price-info");

    const ethereumPrice = parseFloat(infoFourty.dataset.ethereumPrice);

    if (IconFourty.src.includes("Image/ethereum.svg")) {
        IconFourty.src = "Image/dollar.svg";
        const ethAmount = parseFloat(infoFourty.textContent);
        const priceInUSD = ethAmount * ethereumPrice;
        infoFourty.textContent = priceInUSD.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    } else {
        IconFourty.src = "Image/ethereum.svg";
        infoFourty.textContent = "0.02 ETH";
    }
});