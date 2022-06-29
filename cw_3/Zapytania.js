Zad. 1
MATCH (movie:Movie) RETURN movie

Zad. 2
MATCH (people:Person {name: "Hugo Weaving"})-[:ACTED_IN]->(Movies) RETURN people,Movies

Zad. 3
MATCH (people:Person {name:"Hugo Weaving"})-[:ACTED_IN]->(m)<-[:DIRECTED]-(directors) RETURN directors

Zad. 4
MATCH (people:Person {name:"Hugo Weaving"})-[:ACTED_IN]->(m)<-[:ACTED_IN]-(actors) RETURN actors

Zad. 4
MATCH (people:Person)-[ACTED_IN]-(:Movie {title: "The Matrix"}) RETURN people

Zad. 5
MATCH (matrix:Movie {title: "The Matrix"})<-[:ACTED_IN]-(actors)-[:ACTED_IN]->(movies) RETURN movies) RETURN a, m2

Zad. 6
MATCH (actors)-[:ACTED_IN]->(movie:Movie) RETURN actors, count(distinct movie) 

Zad. 7
MATCH (a)-[:WROTE]->(m)<-[:DIRECTED]-(a) RETURN a, m.title

Zad. 8
MATCH (a:Person {name:"Hugo Weaving"})-[:ACTED_IN]->(m:Movie)<-[:ACTED_IN]-(b:Person {name:"Keanu Reeves"}) RETURN a, b, m

Zad. 9

