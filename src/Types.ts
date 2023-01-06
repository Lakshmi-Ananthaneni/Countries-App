export type Countries = {
    flag:string;
    name : string;
    region: string;
    capital : string;
    population: number;
    alpha3Code: string;
    
};

export type CountriesProps = {
    country : 
    {
        flag: string;
        name : string;
        region: string;
        capital : string;
        population: number;
        nativeName: string;
        borders : string [];
        timeZones : string[];
        alpha3Code: string;
        country:string;
         
    };
   
};
export type Country = {
    flag:string;
    name : string;
    capital : string;
    population : number;
    nativeName: string;
    region: string;
    borders : string [];
    timeZones : string[];
    alpha3Code: string;
    country: string;
    
};
export type CountryProps = {
   country : 
   { 
    flag:string;
    name : string;
    capital : string;
    population : number;
    nativeName: string;
    region: string;
    borders : string [];
    timeZones : string[];
    alpha3Code: string;
    country: string;
   };
};

export type InitialStateCountries = {
    error: boolean,
    countries: Countries[],
    isLoading: boolean,
    
  }
  export type InitialStateCountry = {
    error: boolean,
    country: Country[],
    isLoading: boolean,
    
  }
  export type InitialStateFavourites = {
    favourites: Countries[],
   
};