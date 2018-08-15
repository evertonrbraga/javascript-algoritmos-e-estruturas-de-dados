//precisa utilizar em conjunto a classe LinkedList (lista ligada)
function LinkedList() {
    var Node = function(element) {
        this.element = element
        this.next = null
    }

    var length = 0
    var head = null

    this.append = function(element) {
        var node = new Node(element),
        current 

        if(head === null) {
            head = node
        } else {
            current = head

            while(current.next) {
                current = current.next
            }

            current.next = node
        }
        length++
    }

    this.insert = function(position, element) {
        if(position >= 0 && position <= length) {
            var node = new Node(element),
            current = head,
            previous,
            index = 0

            if(position === 0) {
                node.next = current
                head = node
            } else {
                while(index++ < position) {
                    previous = current
                    current = current.next
                }
                node.next = current
                previous.next = node
            }
            length++
            return true
        } else {
            return false
        }
    }

    this.removeAt = function(position) {
        if(position > - 1 && position < length) {
            var current = head,
            previous,
            index = 0

            if(position === 0) {
                head = current.next
            } else {
                while(index++ < position) {
                    previous = current
                    current = current.next
                }
                previous.next = current.next
            }
            length--
            return current.element
        } else {
            return null
        }
    }

    this.remove = function(element) {
        var index = this.indexOf(element)
        return this.removeAt(index)
    }

    this.indexOf = function(element) {
        var current = head,
        index = 0

        while(current) {
            if(element === current.element) {
                return index
            }
            index++
            current = current.next
        }
        return - 1
    }

    this.isEmpty = function() {
        return length === 0
    }

    this.size = function() {
        return length
    }

    this.getHead = function() {
        return head
    }

    this.toString = function() {
        var current = head,
        string = ''

        while(current) {
            string += current.element + ' '
            current = current.next
        }

        return string
    }

    this.print = function() {
        console.log(this.toString())
    }
}

function HashTable() {
    var table = []

    var ValuePair = function(key, value) {
        this.key = key
        this.value = value
        this.toString = function() {
            return '[' + this.key + ' - ' + this.value + ']'
        }
    }

    this.put = function(key, value) {
        var position = loseloseHashCode(key)
        
        if(table[position] === undefined) {
            table[position] = new LinkedList()
        }
        table[position].append(new ValuePair(key, value))
    }

    this.remove = function(key) {
        var position = loseloseHashCode(key)

        if(table[position] !== undefined) {
            var current = table[position].getHead()

            while(current.next) {
                if(current.element.key === key) {
                    table[position].remove(current.element)
                    if(table[position].isEmpty()) {
                        table[position] = undefined
                    }
                    return true
                }
                current = current.next
            }
            if(current.element.key === key) {
                table[position].remove(current.element)
                if(table[position].isEmpty()) {
                    table[position] = undefined
                }
                return true
            }
        }
        return false
    }

    this.get = function(key) {
        var position = loseloseHashCode(key)

        if(table[position] !== undefined) {
            var current = table[position].getHead()

            while(current.next) {
                if(current.element.key === key) {
                    return current.element.value
                }
                current = current.next
            }
            if(current.element.key === key) {
                return current.element.value
            }
        }
        return undefined
    }

    var loseloseHashCode = function(key) {
        var hash = 0
        for(var i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i)
        }
        return hash % 37
    }

    this.print = function() {
        for(var i = 0; i < table.length; i++) {
            if(table[i] !== undefined) {
                console.log(i + ' : ' + table[i])
            }
        }
    }

    this.size = function() {
        return table.length
    }
}