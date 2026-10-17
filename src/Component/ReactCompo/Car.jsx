export default function Car(
     { brand, obj, model, year, fuel, name, color }
){
    return (
        <div className="p-2">
            <h1 className="font-mono">
                My Car name is {brand} car <br />
                {brand} is {obj} <br />
                My car model is {model} <br />
                and that car is released in{year} <br />
                This fuel type is {fuel}
            </h1>
            <h2 className="font-mono">
                There are car info: <br />
                Car: {name} <br />
                Model: {model} <br />
                Color: {color} <br />
                Yesr: {year}
            </h2>
        </div>
    )
}