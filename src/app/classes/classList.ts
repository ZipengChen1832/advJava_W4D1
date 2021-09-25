export interface Classes {
    code: number;
    name: string;
    units: number;
    description: string;
}


export const CLASSES: Classes[] = [
    {code: 10000, name: 'Calculus 1', units: 4, description: 'Introduces the concepts of limits, derivatives and integrals'},
    {code: 10002, name: 'Statistics', units: 4, description: 'Let students learn about distribution, confidence interval, etc.'},
    {code: 10004, name: 'Linear Algebra', units: 4, description: 'Teach students about linear algebra and stuff'},
    {code: 11000, name: 'Management Science', units: 4, description: 'Use linear programming to optimize real world problems'},
    {code: 11004, name: 'Intro to Finance', units: 4, description: 'Introduction to corporate finance and building financial models such as CAPM, DCF, etc.'}
] 