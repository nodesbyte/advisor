import React from "react";

export default function Table({ items, onEdit, onDelete }) {
    return (
        <div className="overflow-x-auto bg-white rounded-2xl shadow-brown border border-irthBrown-100">
            <table className="w-full">
                <thead className="bg-warm-gradient">
                    <tr>
                        <th className="px-6 py-4 text-left text-xs font-semibold text-irthBrown-700 uppercase tracking-wider">Title</th>
                        <th className="px-6 py-4 text-left text-xs font-semibold text-irthBrown-700 uppercase tracking-wider">Status</th>
                        <th className="px-6 py-4 text-left text-xs font-semibold text-irthBrown-700 uppercase tracking-wider">Actions</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-irthBrown-100">
                    {items.map((item, index) => (
                        <tr key={item.id} className="hover:bg-warmWhite-100 transition-colors duration-200 group">
                            <td className="px-6 py-4">
                                <div className="flex items-center space-x-3">
                                    <div className="w-8 h-8 bg-brown-gradient rounded-lg flex items-center justify-center text-white font-bold text-sm shadow-brown">
                                        {index + 1}
                                    </div>
                                    <div>
                                        <div className="text-sm font-semibold text-irthBrown-800 group-hover:text-irthBrown-900 transition-colors">
                                            {item.title}
                                        </div>
                                        <div className="text-xs text-irthBrown-500">
                                            Created {new Date(item.createdAt).toLocaleDateString()}
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                    item.status === 'active' 
                                        ? 'bg-irthBrown-100 text-irthBrown-800' 
                                        : 'bg-warmWhite-200 text-irthBrown-600'
                                }`}>
                                    <div className={`w-2 h-2 rounded-full mr-1.5 ${
                                        item.status === 'active' ? 'bg-irthBrown-500' : 'bg-irthBrown-400'
                                    }`}></div>
                                    {item.status || "active"}
                                </span>
                            </td>
                            <td className="px-6 py-4">
                                <div className="flex items-center space-x-2">
                                    <button
                                        onClick={() => onEdit(item)}
                                        className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-lg text-white bg-brown-gradient hover:shadow-brown focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-irthBrown-500 transition-all duration-200 shadow-brown hover:shadow-brown-lg"
                                    >
                                        <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                        </svg>
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => alert(JSON.stringify(item))}
                                        className="inline-flex items-center px-3 py-1.5 border border-irthBrown-200 text-xs font-medium rounded-lg text-irthBrown-700 bg-white hover:bg-warmWhite-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-irthBrown-500 transition-all duration-200 shadow-brown hover:shadow-brown-lg"
                                    >
                                        <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                        View
                                    </button>
                                    <button
                                        onClick={() => onDelete(item)}
                                        className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-lg text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-all duration-200 shadow-sm hover:shadow-md"
                                    >
                                        <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                        </svg>
                                        Delete
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
