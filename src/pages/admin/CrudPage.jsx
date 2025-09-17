import React, { useEffect, useState } from "react";
import Table from "../../components/admin/Table";
import { firebaseApi } from "../../firebase";

export default function CrudPage({ collectionName }) {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [title, setTitle] = useState("");
    const [editItem, setEditItem] = useState(null);

    useEffect(() => {
        const col = firebaseApi.colRef(collectionName);
        const unsub = firebaseApi.onSnapshot(
            col,
            (snapshot) => {
                const arr = [];
                snapshot.forEach((doc) => arr.push({ id: doc.id, ...doc.data() }));
                setItems(arr);
                setLoading(false);
            },
            (err) => {
                console.error(err);
                setLoading(false);
            }
        );
        return unsub;
    }, [collectionName]);

    async function addOrUpdate(e) {
        e.preventDefault();
        if (editItem) {
            await firebaseApi.updateDoc(
                firebaseApi.doc(
                    firebaseApi.colRef(collectionName).firestore,
                    collectionName,
                    editItem.id
                ),
                { title }
            );
            setEditItem(null);
        } else {
            await firebaseApi.addDoc(firebaseApi.colRef(collectionName), {
                title,
                createdAt: Date.now(),
                status: "active",
            });
        }
        setTitle("");
    }

    async function remove(it) {
        if (!window.confirm("Delete this item?")) return;
        await firebaseApi.deleteDoc(
            firebaseApi.doc(
                firebaseApi.colRef(collectionName).firestore,
                collectionName,
                it.id
            )
        );
    }

    function startEdit(it) {
        setEditItem(it);
        setTitle(it.title || "");
    }

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-2xl font-bold text-gray-900 capitalize">{collectionName} Management</h2>
                    <p className="text-gray-600 mt-1">Manage your {collectionName.toLowerCase()} efficiently</p>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span>{items.length} {collectionName.toLowerCase()}</span>
                </div>
            </div>

            {/* Add/Edit Form */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
                <form onSubmit={addOrUpdate} className="space-y-4">
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            {editItem ? 'Edit' : 'Add New'} {collectionName.slice(0, -1)}
                        </label>
                        <div className="flex gap-3">
                            <input
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-irthBrown-500 focus:ring-4 focus:ring-irthBrown-100 focus:outline-none transition-all duration-200 bg-gray-50 focus:bg-white"
                                placeholder={`Enter ${collectionName.slice(0, -1).toLowerCase()} title`}
                            />
                            <button 
                                type="submit"
                                className="px-6 py-3 bg-gradient-to-r from-irthBrown-600 to-irthBrown-700 text-white font-semibold rounded-xl hover:from-irthBrown-700 hover:to-irthBrown-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                            >
                                <span className="flex items-center">
                                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                    </svg>
                                    {editItem ? "Update" : "Add"}
                                </span>
                            </button>
                            {editItem && (
                                <button
                                    type="button"
                                    onClick={() => {
                                        setEditItem(null);
                                        setTitle("");
                                    }}
                                    className="px-6 py-3 bg-white border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:border-irthBrown-300 hover:text-irthBrown-700 transition-all duration-200 shadow-sm hover:shadow-md"
                                >
                                    <span className="flex items-center">
                                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                        Cancel
                                    </span>
                                </button>
                            )}
                        </div>
                    </div>
                </form>
            </div>

            {/* Data Table */}
            {loading ? (
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-12">
                    <div className="flex items-center justify-center">
                        <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 border-4 border-irthBrown-200 border-t-irthBrown-600 rounded-full animate-spin"></div>
                            <span className="text-gray-600 font-medium">Loading {collectionName.toLowerCase()}...</span>
                        </div>
                    </div>
                </div>
            ) : (
                <Table items={items} onEdit={startEdit} onDelete={remove} />
            )}
        </div>
    );
}
