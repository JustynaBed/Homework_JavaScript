var offices = [
    { id: "GD", name: "Gdansk", headquarter: true },
    { id: "GL", name: "Gliwice" },
    { id: "KO", name: "Koszalin" }
];

var workers = [
    { id: 1,  name: "Bartek",     type: "P", office: "GD", salary: 300 },
    { id: 2,  name: "Wojtek",     type: "P", office: "GD", salary: 210 },
    { id: 3,  name: "Piotr",      type: "M", office: "GL", salary: 250 },
    { id: 4,  name: "Damian",     type: "P", office: "KO", salary: 290 },
    { id: 5,  name: "Jan",        type: "P", office: "GL", salary: 210 },
    { id: 6,  name: "Mateusz",    type: "P", office: "GD", salary: 290 },
    { id: 7,  name: "Weronika",   type: "M", office: "KO", salary: 240 },
    { id: 8,  name: "Gabriela",   type: "M", office: "GD", salary: 290 },
    { id: 9,  name: "Alina",      type: "M", office: "KO", salary: 290 },
    { id: 10, name: "Aleksander", type: "P", office: "GL", salary: 260 },
    { id: 11, name: "Tomek",      type: "P", office: "GD", salary: 200 },
    { id: 12, name: "Krzysztof",  type: "M", office: "KO", salary: 290 },
    { id: 13, name: "Marcin",     type: "P", office: "GD", salary: 280 },
    { id: 14, name: "Agata",      type: "P", office: "GD", salary: 230 },
    { id: 15, name: "Magda",      type: "P", office: "KO", salary: 220 }
];

//Struktura firmy

var company = { offices: [] };

company.offices = offices.map((office) => {
    return {
        id: office.id,
        name: office.name,
        headquarter: office.headquarter || false,
        workers: workers.filter(function(worker) {
            return worker.office === office.id
        })
}
});

console.log(company);

// 1) Wyswietl, informacje o biurze w Gliwicach (lokalizacja, liczba przypisanych pracowników, srednia pensja),

const infoGliwice = company.offices
    .filter((office) => office.name === 'Gliwice')
    .map(({name,workers}) => {
        return {
            name: name,
            numberOfEmployees: workers.length,
            averageSalary: workers.reduce((acc, next) => acc + next.salary, 0) / workers.length
        }
    });

console.log(infoGliwice);

// 2) Dodaj nowe biuro (w Poznaniu)

company.offices.push({
    id : 'PO',
    name : 'Poznań',
    headquarter: false,
    workers: [],
});

//3) Dodaj nowego pracownika do biura w Poznaniu:{ id: 16, name: "Olek", type: "M", office: "PO", salary: 500 }

const newWorker = { id: 16, name: "Olek", type: "M", office: "PO", salary: 500 };

let newOfficeInPoznan = company.offices
    .find((office) => office.name === 'Poznań');

newOfficeInPoznan.workers.push(newWorker)

// 4) Wyswietl, informacje o biurze w Poznaniu

const infoPoznan = company.offices
    .filter((office) => office.name === 'Poznań');

console.log(infoPoznan);

// 5) Wyswietl srednia pensje w calej firmie

const workersInAllOffices = company.offices.reduce((acc, next)=>
    acc.concat(next.workers), []);

const averageSalary = (workersInAllOffices.reduce((acc, next) =>
acc + next.salary, 0) / workersInAllOffices.length).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});

console.log(averageSalary);

// 6) Wyswietl najlepiej oplacanego pracownika w poszczególnych biurach

const bestPaidWorkers = company.offices.map(({office, workers}) => {
    let salaryWorkers = workers.map(worker => worker.salary);
    const maxSalary = salary => Math.max(...salary);
    return {
        workers: workers.filter(office => office.salary === maxSalary(salaryWorkers))
    }

});

const bestPaidWorkersInOffices = bestPaidWorkers
    .reduce((acc, next) => acc.concat(next.workers),[]);

console.log(bestPaidWorkersInOffices);

// 7) Wyswietl najlepiej oplacanego pracownika w calej firmie oraz nazwe jego biura.

//1 sposób
const sortWorkers = bestPaidWorkersInOffices.sort((prev, next) => next.salary - prev.salary)
console.log(sortWorkers[0]);

//2 sposób
const salaryWorkers = workersInAllOffices
    .map(worker => worker.salary);

const maxSalary = (Math.max(...salaryWorkers));


const bestWorker = workersInAllOffices
    .find((office) => office.salary === maxSalary);

console.log(bestWorker);

