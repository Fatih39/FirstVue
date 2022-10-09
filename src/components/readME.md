This folder contains extends for HTML, CSS, & JS.

For future need : 
To enable arguments :
<script setup>
defineProps({
  msg: {
    type: String,
    required: true,
  },
});
</script>
Parsing args :
<HelloWorld msg="You did it!" />