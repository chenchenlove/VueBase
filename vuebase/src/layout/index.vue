<template>
  <div class="page-wrapper">
    <Header></Header>
    <div class="page-container">
      <PageContent />
    </div>
  </div>
</template>

<script>
import Header from "./components/Header/index";
import PageContent from "./components/Content/index";
export default {
  name: "PageWrapper",
  components: { PageContent, Header }
};
</script>
