# Consommer l'API

Salut les amis !
Rapide notice pour expliquer comment appeler l'api pour qu'elle fasse de la magie.

api location: http://localhost:3000

Ci dessous les différentes urls qui permettent d'appeler l'API.
Attention, la BDD est vide par défaut.

Les méthodes en capitales correspondent à la méthode à utiliser avec $http.
Pour faire l'analogie avec le CRUD:

Create = POST
Read = GET
Update = PUT
Delete = DELETE

Dans chaque section sont décrites les différentes méthodes accessibles et utiles pour le projet.

La section **Modèle** présente à quoi ressemblent les objets stockés en BDD, et par conséquent quel type d'objet est obtenu via un *GET*, et quel objet est attendu en *POST*

## EXEMPLES

**WRITING...*

## /api/users

### Modèle

```
{
	_id: (string),
	username: String,
	password: String,
	firstname: String,
	lastname: String,
	email: String,
	location: String,
	jams: Array of ids
}
```

### GET (/api/users)
Renvoie tous les utilisateurs enregistrés en base de donnée.

### GET (/api/users/:id)
Renvoie l'utilisateur portant l'id spécifié

### PUT (/api/users/:id)
Renvoie l'utilisateur portant l'id spécifié

### POST (/api/users)
Crée un utilisateur à partir des datas entrées.

### DELETE (/api/users/:id)
Détruit l'utilisateur portant l'id spécifié

## /api/jams

### Modèle

```
{
	_id: (string),
	name: String,
	description: String,
	date: String,
	id_admin: (string),   // id de l'admin de la jam
	email: String,
	location: String,
	users: Array of ids
}
```

### GET (/api/jams)
Renvoie toutes les jams enregistrées en BDD

### GET (/api/jams/:id)
Renvoie la jam portant l'id spécifié

### PUT (/api/jams/:id)
Renvoie la jam portant l'id spécifié

### POST (/api/jams)
Crée une jam à partir des datas entrées.

### DELETE (/api/jams/:id)
Renvoie la jam portant l'id spécifié

## Contact

### Modèle

```
{
	_id: (string),
	name: String,
	phone_number: Number,
	email: String,
	message: String
}
```

### GET (/api/contacts)
Renvoie tous les formulaires de contact enregistrés en BDD

### GET (/api/contacts/:id)
Renvoie le formulaire de contact portant l'id spécifié

### POST (/api/contacts)

Soumettre un nouveau formulaire de contact.