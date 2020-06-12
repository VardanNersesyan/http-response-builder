class ResponseBuilder {

    data = {};

    addItem(item) {
        if (!item) {
            this.error('addItem require to provide item');
        }

        this.data.item = item;
        return this;
    }

    addItems(items) {
        if (!Array.isArray(items)) {
            this.error('addItems method accept only array value');
        }

        this.data.items = items;
        return this;
    }

    addProperty(key, value) {
        if (!key) {
            this.error('addProperty method key property required');
        }

        if (!value) {
            this.error('addProperty method value property required');
        }

        if (typeof key !== 'string') {
            this.error('addProperty method key property accept only string value');
        }

        this.data[key] = value;
        return this;
    }

    message(message) {
        this.data.message = message;
        return this;
    }

    success(bool) {
        if (typeof bool !== 'boolean') {
            this.error('success method accept only boolean value');
        }

        this.data.success = bool;
        return this;
    }

    get() {
        return this.data;
    }

    getJson() {
        return JSON.stringify(this.data);
    }

    error(msg) {
        throw new Error(`ResponseBuilder: ${msg}`);
    }
}

module.exports = ResponseBuilder;