// Simulation des données importées
import PRODUCTS from './PRODUCTS.json';
import CATEGORIES from './CATEGORIES.json';
import SUPPLIERS from './SUPPLIERS.json';

// Variables temporaires pour manipuler les données
let products = [...PRODUCTS];
let categories = [...CATEGORIES];
let suppliers = [...SUPPLIERS];

// Fonctions pour les produits
export function getAllProducts() {
    return products.map(product => ({
        ...product,
        category_name: categories.find(cat => cat.id === product.category_id)?.name || 'Unknown',
        supplier_name: suppliers.find(sup => sup.id === product.supplier_id)?.name || 'Unknown',
    }));
}

export function getProductById(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return null;
    return {
        ...product,
        category_name: categories.find(cat => cat.id === product.category_id)?.name || 'Unknown',
        supplier_name: suppliers.find(sup => sup.id === product.supplier_id)?.name || 'Unknown',
    };
}

export function addProduct(newProduct) {
    const id = Math.max(0, ...products.map(p => p.id)) + 1;
    products.push({ id, ...newProduct });
    return id;
}

export function updateProduct(productId, updatedFields) {
    const index = products.findIndex(p => p.id === productId);
    if (index === -1) return false;
    products[index] = { ...products[index], ...updatedFields };
    return true;
}

export function deleteProduct(productId) {
    products = products.filter(p => p.id !== productId);
}

// Fonctions pour les catégories
export function getAllCategories() {
    return categories;
}

export function getCategoryById(categoryId) {
    return categories.find(cat => cat.id === categoryId) || null;
}

export function addCategory(newCategory) {
    const id = Math.max(0, ...categories.map(c => c.id)) + 1;
    categories.push({ id, ...newCategory });
    return id;
}

export function updateCategory(categoryId, updatedFields) {
    const index = categories.findIndex(c => c.id === categoryId);
    if (index === -1) return false;
    categories[index] = { ...categories[index], ...updatedFields };
    return true;
}

export function deleteCategory(categoryId) {
    categories = categories.filter(c => c.id !== categoryId);
}

// Fonctions pour les fournisseurs
export function getAllSuppliers() {
    return suppliers;
}

export function getSupplierById(supplierId) {
    return suppliers.find(sup => sup.id === supplierId) || null;
}

export function addSupplier(newSupplier) {
    const id = Math.max(0, ...suppliers.map(s => s.id)) + 1;
    suppliers.push({ id, ...newSupplier });
    return id;
}

export function updateSupplier(supplierId, updatedFields) {
    const index = suppliers.findIndex(s => s.id === supplierId);
    if (index === -1) return false;
    suppliers[index] = { ...suppliers[index], ...updatedFields };
    return true;
}

export function deleteSupplier(supplierId) {
    suppliers = suppliers.filter(s => s.id !== supplierId);
}
