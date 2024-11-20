type BasicColors = 'RED' | 'BLUE' | 'GREEN' | 'YELLOW' | 'BLACK' | 'WHITE';

type RealColors = Exclude<BasicColors, 'BLACK' | 'WHITE'>;

function showColors(color: RealColors): void {
    console.log(`Selected color: ${color}`);
}

showColors('BLACK');
showColors('BLUE');
showColors('RED');