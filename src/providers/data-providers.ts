import { DataProvider } from "@refinedev/core";
import {
    getProductById,
    updateProduct,
    addProduct,
    deleteProduct,
    getAllProducts,
    getCategoryById,
    updateCategory,
    addCategory,
    deleteCategory,
    getAllCategories,
    getSupplierById,
    updateSupplier,
    addSupplier,
    deleteSupplier,
    getAllSuppliers,
} from "./simulation/Controllers";

const CONTROLLERS = "./simulation/Controllers.jsx";

// Définition des types pour les ressources
type ResourceFunctions = {
    getOne?: (id: string | number) => any;
    update?: (id: string | number, variables: any) => any;
    create?: (variables: any) => string | number;
    deleteOne?: (id: string | number) => void;
    getList?: () => any[];
};

const resourceFunctions: Record<string, ResourceFunctions> = {
    PRODUCTS: {
        getOne: getProductById,
        update: updateProduct,
        create: addProduct,
        deleteOne: deleteProduct,
        getList: getAllProducts,
    },
    CATEGORIES: {
        getOne: getCategoryById,
        update: updateCategory,
        create: addCategory,
        deleteOne: deleteCategory,
        getList: getAllCategories,
    },
    SUPPLIERS: {
        getOne: getSupplierById,
        update: updateSupplier,
        create: addSupplier,
        deleteOne: deleteSupplier,
        getList: getAllSuppliers,
    },
};

// Définition du fournisseur de données
export const dataProvider: DataProvider = {
    getOne: async ({ resource, id }) => {
        const resourceFn = resourceFunctions[resource]?.getOne;
        if (!resourceFn) throw new Error(`getOne not implemented for resource "${resource}".`);
        const response = await resourceFn(id);
        return { data: response };
    },
    update: async ({ resource, id, variables }) => {
        const resourceFn = resourceFunctions[resource]?.update;
        if (!resourceFn) throw new Error(`update not implemented for resource "${resource}".`);
        const response = await resourceFn(id, variables);
        return { data: response };
    },
    create: async ({ resource, variables }) => {
        const resourceFn = resourceFunctions[resource]?.create;
        if (!resourceFn) throw new Error(`create not implemented for resource "${resource}".`);
        const id = await resourceFn(variables);
        const response = await resourceFunctions[resource]?.getOne?.(id);
        return { data: response };
    },
    deleteOne: async ({ resource, id }) => {
        const resourceFn = resourceFunctions[resource]?.deleteOne;
        if (!resourceFn) throw new Error(`deleteOne not implemented for resource "${resource}".`);
        await resourceFn(id);
        return { data: { id } };
    },
    getList: async ({ resource, filters = undefined }) => {
        const resourceFn = resourceFunctions[resource]?.getList;
        if (!resourceFn) throw new Error(`getList not implemented for resource "${resource}".`);
        let response = await resourceFn();
        if (filters) {
            response = response.filter(items => {
                // concu par GPT pour ignorer les accents
                const nameWithoutAccents = items.name.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
                const filterWithoutAccents = filters.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
                return nameWithoutAccents.toLowerCase().includes(filterWithoutAccents.toLowerCase());

                // return items.name.toLowerCase().includes(filters.toLowerCase());
            });
        }
        return { data: response, total: response.length };
    },
    getApiUrl: () => CONTROLLERS,
};
