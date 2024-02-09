const { projects, clients } = require("../sampleData");

// Mongoose Models
const Project = require("../models/Project");
const Client = require("../models/Client");

const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLSchema,
    GraphQLList,
} = require("graphql");

// Client Type
const ClientType = new GraphQLObjectType({
    name: "Client",
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        phone: { type: GraphQLString },
    }),
});

// Client Type
const ProjectType = new GraphQLObjectType({
    name: "Project",
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        description: { type: GraphQLString },
        status: { type: GraphQLString },
        client: {
            type: ClientType,
            resolve(parent, args) {
                // return clients.find((client) => client.id === parent.clientId); // This will return temporary project file (hard code)
                return Client.findById(parent.clientId);
            },
        },
    }),
});

const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        clients: {
            type: new GraphQLList(ClientType),
            resolve(parent, args) {
                // return clients; // This will return temporary project file (hard code)
                return Client.find();
            },
        },
        client: {
            type: ClientType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                // return clients.find((client) => client.id === args.id); // This will return temporary project file (hard code)
                return Client.findById(args.id);
            },
        },
        projects: {
            type: new GraphQLList(ProjectType),
            resolve(parent, args) {
                // return projects; // This will return temporary project file (hard code)
                return Project.find();
            },
        },
        project: {
            type: ProjectType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                // return projects.find((project) => project.id === args.id); // This will return temporary project file (hard code)
                return Project.findById(args.id);
            },
        },
    },
});

module.exports = new GraphQLSchema({
    query: RootQuery,
});

/* 
Later, we may go to localhost:<number>/graphql
and try 
{
  client(id: "1") {
    id, name, email, phone
  }
}
or
{
  clients {
    id, name, email, phone
  }
}
*/
