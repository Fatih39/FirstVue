This folder contains extends for HTML, CSS, & JS.

Task :
1. For Main Page & Legal (Form), need to get the form value and submit it to direct company email.
2. For About Page & Footer (Subscribe form), need to plugin using MailChimp (company mail).
3. Header, to access features like Resources need to head direct to Pop Up Page

For future needs: 
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