module.exports = [
"[externals]/@github/spark/spark [external] (@github/spark/spark, esm_import, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "server/chunks/ssr/[externals]_@github_spark_spark_76ad4242._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[externals]/@github/spark/spark [external] (@github/spark/spark, esm_import)");
    });
});
}),
];