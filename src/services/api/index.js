import PeopleRepository from './repositories/people.repository';
import StarshipsRepository from './repositories/starships.repository';
import PlanetsRepository from './repositories/planets.repository';

const repositories = {
    people: PeopleRepository,
    starships: StarshipsRepository,
    planets: PlanetsRepository
}

export const RepositoryFactory = {
    get: name => repositories[name]
}