import categoryModel from "./category";

const productModel = {
    data: [
        {
            title: 'Blank Cap', slug: 'blank-cap', category: 'cap',
            images: ['p1.jpg', 'p2.jpg', 'p3.jpg', 'p4.jpg'],
            price: 9.99, currency: 'USD', isHighlight: false, isCustomizable: true,
            description: 'Pure cotton'
        },
        {
            title: 'Baseball Cap 1', slug: 'baseball-cap-1', category: 'cap',
            images: ['p1.jpg', 'p2.jpg', 'p3.jpg', 'p4.jpg', 'p5.jpg', 'p6.jpg', 'p7.jpg'],
            price: 9.99, currency: 'USD', isHighlight: true, isRecommend: false, isCustomizable: true,
            description: 'Pure cotton'
        },
        {
            title: 'Baseball Cap 2', slug: 'baseball-cap-2', category: 'cap',
            images: ['p1.jpg', 'p2.jpg', 'p3.jpg', 'p4.jpg', 'p5.jpg', 'p6.jpg', 'p7.jpg'],
            price: 9.99, currency: 'USD', isHighlight: false, isRecommend: true, isCustomizable: true,
            description: 'Pure cotton'
        },
        {
            title: 'Baseball Cap 3', slug: 'baseball-cap-3', category: 'cap',
            images: ['p1.jpg', 'p2.jpg', 'p3.jpg', 'p4.jpg', 'p5.jpg', 'p6.jpg', 'p7.jpg', 'p8.jpg', 'p9.jpg'],
            price: 9.99, currency: 'USD', isHighlight: false, isRecommend: true, isCustomizable: true,
            description: 'Pure cotton'
        },
        {
            title: 'Baseball Cap 4', slug: 'baseball-cap-4', category: 'cap',
            images: ['p1.jpg', 'p2.jpg', 'p3.jpg', 'p4.jpg', 'p5.jpg', 'p6.jpg', 'p7.jpg'],
            price: 9.99, currency: 'USD', isHighlight: false, isRecommend: false, isCustomizable: true,
            description: 'Pure cotton'
        },
        {
            title: 'Baseball Cap 5', slug: 'baseball-cap-5', category: 'cap',
            images: ['p1.jpg', 'p2.jpg', 'p3.jpg', 'p4.jpg'],
            price: 9.99, currency: 'USD', isHighlight: false, isRecommend: false, isCustomizable: true,
            description: 'Pure cotton'
        },
        {
            title: 'Baseball Cap 6', slug: 'baseball-cap-6', category: 'cap',
            images: ['p1.jpg', 'p2.jpg', 'p3.jpg'],
            price: 9.99, currency: 'USD', isHighlight: false, isRecommend: false, isCustomizable: true,
            description: 'Pure cotton'
        },
        {
            title: 'Baseball Cap 7', slug: 'baseball-cap-7', category: 'cap',
            images: ['p1.jpg', 'p2.jpg', 'p3.jpg'],
            price: 9.99, currency: 'USD', isHighlight: false, isRecommend: false, isCustomizable: true,
            description: 'Pure cotton'
        },
        {
            title: 'Beanie 1', slug: 'beanie-1', category: 'beanie',
            images: ['p1.jpg', 'p2.jpg', 'p3.jpg', 'p4.jpg', 'p5.jpg', 'p6.jpg'],
            price: 9.99, currency: 'USD', isHighlight: true, isRecommend: false, isCustomizable: true,
            description: 'beanie；Acrylic；beanie;'
        },
        {
            title: 'Beanie 2', slug: 'beanie-2', category: 'beanie',
            images: ['p1.jpg', 'p2.jpg', 'p3.jpg', 'p4.jpg'],
            price: 9.99, currency: 'USD', isHighlight: false, isRecommend: true, isCustomizable: true,
            description: 'beanie；Acrylic；beanie;'
        },
        {
            title: 'Beanie 3', slug: 'beanie-3', category: 'beanie',
            images: ['p1.jpg', 'p2.jpg', 'p3.jpg', 'p4.jpg', 'p5.jpg', 'p6.jpg', 'p7.jpg'],
            price: 9.99, currency: 'USD', isHighlight: false, isRecommend: true, isCustomizable: true,
            description: 'beanie；stretch mohair；beanie;'
        },
        {
            title: 'Beanie 4', slug: 'beanie-4', category: 'beanie',
            images: ['p1.jpg', 'p2.jpg'],
            price: 9.99, currency: 'USD', isHighlight: true, isRecommend: false, isCustomizable: true,
            description: 'beanie；Acrylic；beanie;'
        },
        {
            title: 'Beanie 5', slug: 'beanie-5', category: 'beanie',
            images: ['p1.jpg', 'p2.jpg', 'p3.jpg', 'p4.jpg'],
            price: 9.99, currency: 'USD', isHighlight: false, isRecommend: true, isCustomizable: true,
            description: 'beanie；Acrylic；beanie;'
        },
        {
            title: 'Beanie 6', slug: 'beanie-6', category: 'beanie',
            images: ['p1.jpg', 'p2.jpg', 'p3.jpg', 'p4.jpg', 'p5.jpg'],
            price: 9.99, currency: 'USD', isHighlight: false, isRecommend: false, isCustomizable: true,
            description: 'beanie；Acrylic；beanie;'
        },
        {
            title: 'Beanie 7', slug: 'beanie-7', category: 'beanie',
            images: ['p1.jpg', 'p2.jpg', 'p3.jpg', 'p4.jpg'],
            price: 9.99, currency: 'USD', isHighlight: false, isRecommend: false, isCustomizable: true,
            description: 'beanie；Acrylic；beanie;'
        },
        {
            title: 'Beanie 8', slug: 'beanie-8', category: 'beanie',
            images: ['p1.jpg', 'p2.jpg', 'p3.jpg'],
            price: 9.99, currency: 'USD', isHighlight: false, isRecommend: false, isCustomizable: true,
            description: 'beanie；Acrylic；beanie;'
        },
        {
            title: 'Beanie 9', slug: 'beanie-9', category: 'beanie',
            images: ['p1.jpg', 'p2.jpg', 'p3.jpg', 'p4.jpg'],
            price: 9.99, currency: 'USD', isHighlight: false, isCustomizable: true,
            description: 'beanie；Acrylic colored yarn；beanie;'
        },
        {
            title: 'Beanie 10', slug: 'beanie-10', category: 'beanie',
            images: ['p1.jpg', 'p2.jpg', 'p3.jpg'],
            price: 9.99, currency: 'USD', isHighlight: false, isCustomizable: true,
            description: 'beanie；Acrylic colored yarn；beanie;'
        },
        {
            title: 'Beanie 11', slug: 'beanie-11', category: 'beanie',
            images: ['p1.jpg', 'p2.jpg', 'p3.jpg', 'p4.jpg', 'p5.jpg'],
            price: 9.99, currency: 'USD', isHighlight: false, isCustomizable: true,
            description: 'beanie；stretch mohair；beanie;'
        },
        {
            title: 'Beanie 12', slug: 'beanie-12', category: 'beanie',
            images: ['p1.jpg', 'p2.jpg'],
            price: 9.99, currency: 'USD', isHighlight: false, isCustomizable: true,
            description: 'beanie；Cotton yarn hanging dyeing；beanie;'
        },
        {
            title: 'Beanie 13', slug: 'beanie-13', category: 'beanie',
            images: ['p1.jpg', 'p2.jpg', 'p3.jpg', 'p4.jpg'],
            price: 9.99, currency: 'USD', isHighlight: false, isCustomizable: true,
            description: 'beanie；Arctic velvet；beanie;'
        },
        {
            title: 'Beanie 14', slug: 'beanie-14', category: 'beanie',
            images: ['p1.jpg', 'p2.jpg'],
            price: 9.99, currency: 'USD', isHighlight: false, isCustomizable: true,
            description: 'beanie；Cotton tie-dye；beanie;'
        },
        {
            title: 'Beanie 15', slug: 'beanie-15', category: 'beanie',
            images: ['p1.jpg', 'p2.jpg', 'p3.jpg', 'p4.jpg', 'p5.jpg'],
            price: 9.99, currency: 'USD', isHighlight: false, isCustomizable: true,
            description: 'beanie；Acrylic；beanie;'
        },
        {
            title: 'Beanie 16', slug: 'beanie-16', category: 'beanie',
            images: ['p1.jpg'],
            price: 9.99, currency: 'USD', isHighlight: false, isCustomizable: true,
            description: 'beanie；Acrylic；beanie;'
        },
        {
            title: 'Beanie 17', slug: 'beanie-17', category: 'beanie',
            images: ['p1.jpg', 'p2.jpg', 'p3.jpg', 'p4.jpg', 'p5.jpg', 'p6.jpg'],
            price: 9.99, currency: 'USD', isHighlight: false, isCustomizable: true,
            description: 'beanie；pure cotton；beanie;'
        },
        {
            title: 'Bucket Hat 1', slug: 'bucket-hat-1', category: 'hat',
            images: ['p1.jpg'],
            price: 9.99, currency: 'USD', isHighlight: true, isRecommend: false, isCustomizable: true,
            description: 'Acrylic',
        },
        {
            title: 'Bucket Hat 2', slug: 'bucket-hat-2', category: 'hat',
            images: ['p1.jpg'],
            price: 9.99, currency: 'USD', isHighlight: true, isRecommend: false, isCustomizable: true,
            description: 'Acrylic',
        },
        {
            title: 'Bucket Hat 3', slug: 'bucket-hat-3', category: 'hat',
            images: ['p1.jpg'],
            price: 9.99, currency: 'USD', isHighlight: false, isRecommend: true, isCustomizable: true,
            description: 'Acrylic',
        },
        {
            title: 'Bucket Hat 4', slug: 'bucket-hat-4', category: 'hat',
            images: ['p1.jpg', 'p2.jpg', 'p3.jpg', 'p4.jpg', 'p5,jpg', 'p6.jpg'],
            price: 9.99, currency: 'USD', isHighlight: false, isRecommend: true, isCustomizable: true,
            description: 'Acrylic',
        },
        {
            title: 'Snapback Cap 1', slug: 'snapback-cap-1', category: 'cap',
            images: ['p1.jpg', 'p2.jpg', 'p3.jpg', 'p4.jpg', 'p5,jpg', 'p6.jpg'],
            price: 9.99, currency: 'USD', isHighlight: false, isCustomizable: true,
            description: 'Pure cotton'
        },
        {
            title: 'Snapback Cap 2', slug: 'snapback-cap-2', category: 'cap',
            images: ['p1.jpg', 'p2.jpg', 'p3.jpg', 'p4.jpg', 'p5,jpg', 'p6.jpg'],
            price: 9.99, currency: 'USD', isHighlight: false, isCustomizable: true,
            description: 'Pure cotton'
        },
        {
            title: 'Snapback Cap 3', slug: 'snapback-cap-3', category: 'cap',
            images: ['p1.jpg', 'p2.jpg', 'p3.jpg', 'p4.jpg', 'p5,jpg', 'p6.jpg'],
            price: 9.99, currency: 'USD', isHighlight: false, isCustomizable: true,
            description: 'Pure cotton'
        },
        {
            title: 'Snapback Cap 4', slug: 'snapback-cap-4', category: 'cap',
            images: ['p1.jpg', 'p2.jpg', 'p3.jpg', 'p4.jpg', 'p5,jpg', 'p6.jpg'],
            price: 9.99, currency: 'USD', isHighlight: false, isCustomizable: true,
            description: 'Pure cotton'
        },
        {
            title: 'Snapback Cap 5', slug: 'snapback-cap-5', category: 'cap',
            images: ['p1.jpg', 'p2.jpg', 'p3.jpg', 'p4.jpg', 'p5,jpg', 'p6.jpg'],
            price: 9.99, currency: 'USD', isHighlight: false, isCustomizable: true,
            description: 'Pure cotton'
        },
        {
            title: 'Snapback Cap 6', slug: 'snapback-cap-6', category: 'cap',
            images: ['p1.jpg', 'p2.jpg', 'p3.jpg', 'p4.jpg', 'p5,jpg', 'p6.jpg'],
            price: 9.99, currency: 'USD', isHighlight: false, isCustomizable: true,
            description: 'Pure cotton'
        },
        {
            title: 'Snapback Cap 7', slug: 'snapback-cap-7', category: 'cap',
            images: ['p1.jpg', 'p2.jpg', 'p3.jpg', 'p4.jpg', 'p5,jpg', 'p6.jpg'],
            price: 9.99, currency: 'USD', isHighlight: false, isCustomizable: true,
            description: 'Pure cotton'
        },
        {
            title: 'Snapback Cap 8', slug: 'snapback-cap-8', category: 'cap',
            images: ['p1.jpg', 'p2.jpg', 'p3.jpg', 'p4.jpg', 'p5,jpg', 'p6.jpg'],
            price: 9.99, currency: 'USD', isHighlight: false, isCustomizable: true,
            description: 'Pure cotton'
        },
    ],
    async getRecommendProducts() {
        return this.data.filter(product => product.isRecommend);
    },
    async getHighlightProducts() {
        return this.data.filter(product => product.isHighlight);
    },
    async getProductBySlug(slug) {
        const product = this.data.find(product => product.slug === slug);
        return product;
    },
    async getProductsByCategory(categorySlug) {
        const c = (await categoryModel.getCategories()).find(c => c.slug === categorySlug);
        if (!c || c.name.toLowerCase() === 'all') return this.data;
        return this.data.filter(product => product.category === c.slug);
    }
};

export default productModel;
