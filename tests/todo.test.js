const request = require('supertest')
const app = require('../app')
const e = require('express')
const { describe } = require('node:test')

describe('Todo API', () => {
  describe('POST /todos', () => {
    it('should return new todos', (done) => {
      // Arrange
      const data = {
        "title":"ToDO 10"
      }

      // Act
      request(app)
      .post('/todos')
      .send(data)
      .end((err, res) => {
        if(err) {
          done(err)
          return
        }

        // Assert
        console.log(res)
        expect(res.body.title).toEqual('ToDO 10')
        expect(res.status).toEqual(201)

        done()
      })
    })
  })

  describe('GET /todos', () => {
    it('should return all todos', (done) => {
      // Arrange

      // Act
      request(app)
      .get('/todos')
      .end((err, res) => {
        if(err) {
          done(err)
          return
        }

        // Assert
        console.log(res)
        expect(res.body).toEqual(expect.arrayContaining([
          expect.objectContaining({
            title: 'ToDO 10'
          })
        ]))
        expect(res.status).toEqual(200)

        done()
      })
    })
  })

  describe('GET /todos/:id', () => {
    it('should return todo by id', (done) => {
      // Arrange
      const id = 10

      // Act
      request(app)
      .get(`/todos/${id}`)
      .end((err, res) => {
        if(err) {
          done(err)
          return
        }

        // Assert
        console.log(res)
        expect(res.body.title).toEqual('ToDO 10')
        expect(res.status).toEqual(200)

        done()
      })
    })
  })

  describe('DELETE /todos/:id', () => {
    it('should return soft delete todo by id', (done) => {
      // Arrange
      const id = 18

      // Act
      request(app)
      .delete(`/todos/${id}`)
      .end((err, res) => {
        if(err) {
          done(err)
          return
        }

        // Assert
        console.log(res)
        expect(res.body.message).toEqual('Todo deleted')
        expect(res.status).toEqual(200)

        done()
      })
    })
  })
})