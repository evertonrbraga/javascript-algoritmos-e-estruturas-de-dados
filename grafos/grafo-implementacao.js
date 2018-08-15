//precisa utilizar em conjunto as classes Dictionary e Queue (fila)
function Dictionary() {
    var items = {}

    this.set = function(key, value) {
        items[key] = value
    }

    this.delete = function(key) {
        if(this.has(key)) {
            delete items[key]
            return true
        }
        return false
    }

    this.has = function(key) {
        return items.hasOwnProperty(key)
    }

    this.get = function(key) {
        return this.has(key) ? items[key] : undefined
    }

    this.clear = function() {
        items = {}
    }

    this.size = function() {
        return Object.keys(items).length
    }

    this.keys = function() {
        return Object.keys(items)
    }

    this.values = function() {
        var values = [],
        keys = Object.keys(items)

        for(var i = 0; i < keys.length; i++) {
            values.push(items[keys[i]])
        }
        return values
    }

    this.getItems = function() {
        return items
    }
}

function Queue() {
    var items = []

    this.enqueue = function(element) {
        items.push(element)
    }

    this.dequeue = function() {
        return items.shift()
    }

    this.front = function() {
        return items[0]
    }

    this.isEmpty = function() {
        return items.length === 0
    }

    this.size = function() {
        return items.length
    }

    this.print = function() {
        console.log(items.toString())
    }
}

function Graph() {
    var vertices = []
    var adjList = new Dictionary()

    this.addVertex = function(v) {
        vertices.push(v)
        adjList.set(v, [])
    }

    this.addEdge = function(v, w) {
        adjList.get(v).push(w)
        adjList.get(w).push(v)
    }

    this.toString = function() {
        var s = ''
        for(var i = 0; i < vertices.length; i++) {
            s += vertices[i] + ' -> '
            var neighbors = adjList.get(vertices[i])
            for(var j = 0; j < neighbors.length; j++) {
                s += neighbors[j] + ' '
            }
            s += '\n'
        }
        return s
    }

    var initializeColor = function() {
        var color = []
        for(var i = 0; i < vertices.length; i++) {
            color[vertices[i]] = 'white'
        }
        return color
    }

    this.bfs = function(v, callback) {
        var color = initializeColor(),
        queue = new Queue();
        queue.enqueue(v)

        while(!queue.isEmpty()) {
            var u = queue.dequeue(),
            neighbors = adjList.get(u)
            color[u] = 'grey'
            for(var i = 0; i < neighbors.length; i++) {
                var w = neighbors[i]
                if(color[w] === 'white') {
                    color[w] = 'grey'
                    queue.enqueue(w)
                }
            }
            color[u] = 'black'
            callback(u)
        }
    }

    this.dfs = function(callback) {
        var color = initializeColor()
        for(var i = 0; i < vertices.length; i++) {
            if(color[vertices[i]] === 'white') {
                dfsVisit(vertices[i], color, callback)
            }
        }
    }

    var dfsVisit = function(u, color, callback) {
        color[u] = 'grey'
        callback(u)

        var neighbors = adjList.get(u)
        for(var i = 0; i < neighbors.length; i++) {
            var w = neighbors[i]
            if(color[w] === 'white') {
                dfsVisit(w, color, callback)
            }
        }
        color[u] = 'black'
    }
}

function printNode(value) {
    console.log('Visited vertex: ' + value)
}