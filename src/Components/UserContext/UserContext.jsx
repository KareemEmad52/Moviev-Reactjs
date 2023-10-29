import { createContext, useContext } from "react";

export let userContext = createContext()


export default function UserContextProvider({ children }) {

    let headers = {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2OWI3ZGU0Mzc1NmJmZjI1N2RmYjc2ZDYxODQ0ODc4OSIsInN1YiI6IjY1MzY2YmNjYWJkYWZjMDE0ZTdlNmYwZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.k7A4Qjtf8b5JT3-k3Rhjwm7ZaBjHrU6ZO4VsQEaoux4'
    }

    return <userContext.Provider value={{ headers }}>
        {children}
    </userContext.Provider>
}
