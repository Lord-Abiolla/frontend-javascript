interface MajorCredits {
    credits: number;
    brand: 'MajorCredits';
}

interface MinorCredits {
    credits: number;
    brand: 'MinorCredits';
}

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
    return {
        credits: subject1.credits + subject2.credits,
        brand: 'MajorCredits'
    };
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
    return {
        credits: subject1.credits + subject2.credits,
        brand: 'MinorCredits'
    };
}

const math: MajorCredits = { credits: 4, brand: 'MajorCredits' };
const physics: MajorCredits = { credits: 3, brand: 'MajorCredits' };

const art: MinorCredits = { credits: 2, brand: 'MinorCredits' };
const music: MinorCredits = { credits: 3, brand: 'MinorCredits' };

console.log(sumMajorCredits(math, physics));
console.log(sumMinorCredits(art, music));
