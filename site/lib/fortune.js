var fortunes = [
    "Conquer your fears before they conquer you.",
    "Rivers need springs.",
    "Do not fear what you don't know.",
    "You'll have a pleasant surprise.",
    "Whenever possible, keep it simple."
];

exports.getFortune = function() {
    return fortunes[Math.floor(Math.random()*fortunes.length)];
};