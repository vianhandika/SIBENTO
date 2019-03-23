import http from './Http'

export default {
  async get () {
    try {
      const res = await http.get('/api/supplier')
      
      return res.data.data
    } catch (err) {
      throw new Error(err)
    }
  },

  async store (payload) {
    try {
      await http.post('/api/supplier', payload)
    } catch (err) {
      throw new Error(err)
    }
  },

  async find (id) {
    try {
      const res = await http.get(`/api/supplier/${id}`)
      
      return res.data.data
    } catch (err) {
      throw new Error(err)
    }
  },

  async update (id, payload) {
    try {
      const res = await http.patch(`/api/supplier/${id}`, payload)

      return res.data.data
    } catch (err) {
      throw new Error(err)
    }
  },

  async delete (id) {
    try {
      await http.delete(`/api/supplier/${id}`)
    } catch (err) {
      throw new Error(err)
    }
  }
}
