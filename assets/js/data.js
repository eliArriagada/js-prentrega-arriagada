class Producto {
    constructor(id, nombre, descripcion, precio, permitePersonalizacion, urlImagen) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
        this.permitePersonalizacion = permitePersonalizacion;
        this.urlImagen = urlImagen;
    }
}

class ProductoCarro {
    constructor(id, cantidad, personalizacion) {
        this.id = id;
        this.cantidad = cantidad;
        this.personalizacion = personalizacion;
    }
}

class Campania {
    constructor(id, nombre, productos, activo) {
        this.id = id;
        this.nombre = nombre;
        this.productos = productos;
        this.activo = activo;
    }
}

class Testimonio {
    constructor(nombre, descripcion, avatar, fondo) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.avatar = avatar;
        this.fondo = fondo;
    }

}
const productos = [
    new Producto("barra1", "Barras de chocolate", "Descubre la delicia en cada cuadrado de nuestra barra de chocolate artesanal de 150 g. Elaborada con los mejores granos de cacao, su textura sedosa se funde en tu boca, liberando un intenso sabor a cacao con delicadas notas de dulzura. Disfruta de este placer indulgente y regala momentos de verdadero deleite con nuestra barra de chocolate artesanal. ¡Una experiencia única para los amantes del buen chocolate.", 5000, true, "assets/imgs/producto1.jpeg"),
    new Producto("alfajor1", "Alfajores Personalizados", "Deléitate con nuestros alfajores artesanales personalizados. Suaves masas rellenas de dulce de leche cremoso, envueltas en coco o chocolate. Cada bocado es una explosión de sabor. Regalos únicos con detalles personalizados. Disfruta de la dulzura hecha a mano y déjate llevar por una experiencia inolvidable. ¡Ahora disponibles en prácticos paquetes de 6 unidades para compartir o disfrutar en cualquier momento.", 3500, true, "assets/imgs/dia mama 2.jpeg"),
    new Producto("alfajor2", "Alfajores ", "Descubre la delicia de nuestros alfajores simples rellenos de manjar. Suaves y delicadas masas se unen en un abrazo de dulce de leche cremoso. Cada bocado es un viaje al sabor tradicional y reconfortante. Disfruta de estos clásicos dulces, perfectos para compartir o regalar. ¡El equilibrio perfecto entre suavidad y dulzura en cada mordisco!", 3000, false, "assets/imgs/producto 4.jpeg"),
    new Producto("bomba1", "Bombas de chocolate", "Experimenta la explosión de sabor con nuestras Bombas de Chocolates. Cada paquete de 6 unidades te brinda una indulgencia inigualable. Bolas de chocolate rellenas de malvavisco que se funden en leche caliente o agua caliente, liberando un torrente de sabores irresistibles. Sumérgete en un mundo de placer, donde la suavidad y la dulzura se combinan en cada sorbo. Comparte momentos especiales o date un capricho con nuestras Bombas de Chocolates. ¡Descubre la magia de cada taza y déjate llevar por una experiencia de sabor fascinante!", 15000, true, "assets/imgs/dia mama 3.jpeg"),
    new Producto("cono1", "Cono chocolate ", "Disfruta de la combinación perfecta en nuestros conos rellenos de chocolate y crema de maní. Cada bocado es una experiencia de sabores y texturas que te cautivarán. La crujiente galleta del cono se funde con el chocolate y se combina con la irresistible crema de maní, creando un deleite inolvidable. Ya sea como un capricho personal o para compartir, nuestros conos te transportarán a un mundo de dulzura y satisfacción. Descubre el placer absoluto en cada mordisco con nuestros conos rellenos. ¡El equilibrio perfecto entre chocolate y crema de maní te espera en cada uno de ellos!", 1000, false, "assets/imgs/producto 6.jpeg"),
    new Producto("cono2", "Cono manjar ", "Disfruta de nuestro cono relleno de manjar y crema pastelera, una combinación irresistible de sabores. El crujiente cono se fusiona con la suavidad del manjar y la deliciosa crema pastelera. Cada bocado es un festín de dulzura y texturas que te transportará a un mundo de placer. Perfecto para satisfacer tus antojos o como un regalo especial. Sumérgete en la delicia de nuestro cono relleno de manjar y crema pastelera y déjate llevar por una experiencia de sabor excepcional. ¡Disfruta cada momento de esta exquisita indulgencia!", 1000, false, "assets/imgs/nuevo 3.png"),
    new Producto("donas1", "Mini donas ", "Disfruta del encanto de nuestras mini donas, un delicioso bocado de dulzura en cada mordisco. Estas adorables creaciones tienen una masa suave y esponjosa, cubierta de glaseado irresistible y decoradas con colores vibrantes. Cada mini dona es una explosión de sabores y diversión. Desde clásicos como chocolate y vainilla, hasta opciones más atrevidas como fresa y caramelo, encontrarás una variedad de sabores para satisfacer todos los antojos. Perfectas para compartir, regalar o disfrutar en cualquier momento del día. ¡Déjate seducir por la irresistible tentación de nuestras mini donas!", 1500, false, "assets/imgs/dia mama 1.jpeg"),
    new Producto("chocolate1", "Chocolate ", "Sumérgete en el placer irresistible de nuestro chocolate suelto, disponible en porciones de 100 g. Cada bocado es una experiencia de deleite para los amantes del chocolate. Con una selección cuidadosa de los mejores granos de cacao y un proceso artesanal, nuestro chocolate suelto cautiva con su sabor intenso y su textura sedosa. Disfruta de la libertad de crear tus propias combinaciones y saborear la pureza del chocolate en cada porción. Déjate llevar por la tentación y disfruta de una experiencia chocolatera única.", 2800, false, "assets/imgs/nuevo 1.png"),
    new Producto("barra2", "Mini Barras de chocolate", "Disfruta de la perfección en miniatura con nuestras mini barras de chocolate de 75 g. Estas deliciosas creaciones son una explosión de sabor en cada bocado. Elaboradas con los mejores ingredientes, cada mini barra te sorprenderá con su suavidad y equilibrio de sabores. Disponible en una variedad de opciones, desde chocolate negro intenso hasta combinaciones gourmet, estas mini barras son ideales para darte un capricho o regalar. Experimenta la indulgencia en tamaño compacto con nuestras mini barras de chocolate. ¡Satisfacción garantizada en cada pequeño momento de placer!", 5000, true, "assets/imgs/nuevo 2.png"),

    new Producto("mix1", "Mix", "Descubre un mix personalizado que combina lo mejor de nuestra chocolatería artesanal: exquisitas barras de chocolate, deliciosos alfajores artesanales y adorables mini donas. Cada bocado es una explosión de sabores y texturas que deleitará tus sentidos. Disfruta de la suavidad del chocolate, la dulzura de los alfajores y la diversión de las mini donas en un mix diseñado para sorprenderte. ¡Satisface todos tus antojos con esta irresistible combinación!", 10000, true, "assets/imgs/producto2.jpeg"),

]

const productosDiaMama = [
    productos[1],
    productos[5],
    productos[7],
]

const productosDiaPapa = [
    productos[3],
    productos[4],
    productos[8],
]
const productosAniversario = [
    productos[1],
    productos[3],
    productos[9],
]

const nuevoProductos = [
    productos[7],
    productos[8],
    productos[9],
]

const campanias = [
    new Campania("dia-mama", "Dia de la mamá", productosDiaMama, true),
    new Campania("dia-papa", "Dia del papá", productosDiaPapa, false),
    new Campania("aniversario", "Nuestro Aniversario", productosAniversario, true),
    new Campania("nuevos-productos", "Nuevos productos", nuevoProductos, false),
]


const testimonios = [
    new Testimonio("María", "No puedo resistirme a los chocolates y los alfajores de vany ventas! Cada bocado es una explosión de sabores deliciosos. Los alfajores tienen la combinación perfecta de manjar y chocolate", "assets/imgs/avatar 1.png", "card-testimonio-1"),
    new Testimonio("Ana", "Las bombas de chocolate y los alfajores son simplemente espectaculares. La calidad del chocolate es excepcional, se nota que utilizan ingredientes de primera. Cada bombón es una pequeña obra de arte, y los alfajores son tan tiernos y llenos de sabor.", "assets/imgs/avatar 2.png", "card-testimonio-2"),
    new Testimonio("Juan", "Siempre encuentro variedades sorprendentes de sabores y combinaciones únicas. Los bombones son tan delicados y exquisitos, y los alfajores son una delicia irresistible. ¡No puedo recomendar esta chocolatería lo suficiente! Si eres amante del chocolate, definitivamente debes probar sus creaciones.", "assets/imgs/avatar 3.png", "card-testimonio-3"),
]