const categoryModel = {
    data: [
        { name: 'All', slug: '' },
        { name: 'Cap', slug: 'cap' },
        { name: 'Beanie', slug: 'beanie' },
        { name: 'Hat', slug: 'hat' },
    ],
    async getCategories() {
        return this.data;
    }
};

export default categoryModel;
