import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";

const cache = new InMemoryCache({
    typePolicies: {
        Query: {
            fields: {
                clients: {
                    merge(existing, incoming) {
                        return incoming;
                    },
                },
                projects: {
                    merge(existing, incoming) {
                        return incoming;
                    },
                },
            },
        },
    },
});

const client = new ApolloClient({
    uri: "http://localhost:5500/graphql",
    cache,
});

function App() {
    return (
        <>
            <ApolloProvider client={client}>
                <Router>
                    <Header />
                    <div className="container">
                        <Routes>
                            <Route path="/" element={<Home />} />
                        </Routes>
                    </div>
                </Router>
            </ApolloProvider>
        </>
    );
}

export default App;
