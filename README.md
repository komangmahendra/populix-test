# Gambaran Umum

Aplikasi yang telah dibuat adalah aplikasi list movie sederhana dengan API dari https://developer.themoviedb.org/v4

Pada halaman Home terdapat list movie, jika di klik akan mengarah ke detail dari movie tersebut.

Pada halaman detail movie user bisa menambahkan movie tersebut ke dalam salah satu list.

Pada halaman list, user bisa melalukan penambahan list item baru dengan properi 'name' dan 'description', di list juga bisa diakses list detailnya, untuk melakukan update ataupun delete dari list item.

_Note: Untuk saat ini setelah beberapa kali mencoba, sepertinya pada list detail ada masalah pada endpoint, jadi setelah list detail di update, list detail sendiri tidak terupdate, walaupun di list sudah terupdate._

## Menjalankan aplikasi

Pastikan environmen sudah siap, kemudian jalankan perintah berikut untuk menjalankan pada simulator ios

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

_Note: selama pengerjaan test developer menggunakan simulator ios untuk pengembangan aplikasi, dikarenakan ada kendala saat akan menjalankan menggunakan Android._

### Unit test

```bash
# run unit test without coverage
npm run test

# OR run unit test with coverage
yarn run test:coverage
```

_Note: saat ini tidak semua di unit test, hanya diambil sampel beberapa dari komponen, screen, hooks, redux._
