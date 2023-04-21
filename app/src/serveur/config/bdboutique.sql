-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : mer. 19 avr. 2023 à 06:41
-- Version du serveur : 10.4.25-MariaDB
-- Version de PHP : 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `bdboutique`
--

-- --------------------------------------------------------

--
-- Structure de la table `articles`
--

CREATE TABLE `articles` (
  `ida` int(11) NOT NULL,
  `nomarticle` varchar(40) COLLATE utf8_unicode_ci NOT NULL,
  `description` text COLLATE utf8_unicode_ci NOT NULL,
  `imageart` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `categorie` varchar(3) COLLATE utf8_unicode_ci NOT NULL,
  `qteinventaire` int(11) NOT NULL,
  `seuil` int(11) NOT NULL,
  `prix` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Déchargement des données de la table `articles`
--

INSERT INTO `articles` (`ida`, `nomarticle`, `description`, `imageart`, `categorie`, `qteinventaire`, `seuil`, `prix`) VALUES
(30, 'Comete chevron ', 'Pierre:\r\n48 diamants taille brillant totalisant 0,54 carat\r\n\r\nMatériaux:\r\nOr blanc 18 carats', 'f9a2d974998722dee1c3929d3a60b62c28f21be1.jpg', 'Bra', 10, 1, 19200),
(31, 'Ruban ', 'Pierre:\r\n48 diamants taille brillant totalisant 1.80 carats\r\n\r\nMatériaux:\r\nOr beige 18 carats', '1c055d58b80badbbc230aaeae141ad97d98271dc.jpg', 'Bra', 7, 2, 26050),
(32, 'Coco crush', 'Matériaux:\r\nOr jaune 18 carats', 'ce65525d8e2c29e8f1064f69b6c19b87c0d10e2b.jpg', 'Bra', 6, 3, 9900),
(33, 'Bracelet extrait de camelia', 'Pierre:\r\n1 diamant taille brillant de 0,13 carat\r\n\r\nMatériaux:\r\nOr rose 18 carats', '0fdf45ea243eca4907582195b07f5aac63f23506.jpg', 'Bra', 6, 4, 6350),
(34, 'Lune', 'Pierre:\r\n25 diamants taille brillant totalisant 0,67 carat\r\n\r\nMatériaux:\r\nOr blanc 18 carats', 'e03ce11aeac9a214a4a66f726c6c5d32e6c56e8b.jpg', 'Rin', 8, 5, 17100),
(35, 'Eternel N5', 'Pierre:\r\n1 diamant de centre taille brillant de 0,25 carat\r\n19 diamants taille brillant totalisant 0,20 carat\r\n\r\nMatériaux:\r\nOr blanc 18 carats', '788b3d8d843a548151831990d7cc89c0cc7a2676.jpg', 'Rin', 5, 6, 11100),
(36, 'Coco crush', 'Matériaux:\r\nOR BEIGE 18 carats', '802c6fe7c238c0d086baaedcf58e0dece8036c65.jpg', 'Rin', 9, 7, 3500),
(37, 'Bouton de camélia', 'Pierre:\r\n65 diamants taille brillant totalisant 1,44 carats\r\n\r\nMatériaux:\r\nOr jaune 18 carats', '5634701f483771935ece939a8df6cf5f44809612.jpg', 'Rin', 1, 8, 17100),
(38, 'Extrait de camélia', 'Pierre:\r\n26 diamants taille brillant totalisant 0,14 carat\r\n\r\nMatériaux:\r\nOr rose 18 carats', 'b7e5811bd94759697fe2f3b2a49ecd9ccf9f31e5.jpg', 'Ear', 4, 9, 7400),
(39, 'Eternel N5 transformable', 'Pierre:\r\n31 diamants taille brillant totalisant 0,67 carat\r\n\r\nMatériaux:\r\nOr blanc 18 carats', 'b08a8229b94ce842455b60d0d747054809684b88.jpg', '', 3, 10, 13950),
(40, 'Etoile filante', 'Pierre:\r\n52 diamants taille brillant totalisant 0,62 carat\r\n\r\nMatériaux:\r\nOr blanc 18 carats', 'd797b37ad6439291ce4537bc33c4d47e352020f1.jpg', 'Ear', 6, 11, 11400),
(41, 'Camélia précieux', 'Pierre:\r\n2 diamants de centre taille poire de 0,40 carat chacun\r\n64 diamants taille brillant totalisant 0,55 carat\r\n\r\nMatériaux:\r\nOr blanc 18 carats', 'ade9e167a305c33600d54aed0e8bb648bf674a06.jpg', 'Ear', 2, 12, 26200),
(42, 'Wear', '', 'a36fe9f7e413202684d5f4b8bdae4fffa06e679c.jpg', 'Bra', 1, 13, 40000),
(43, 'Necklace', '', '444e9f2d9782b5335b08d96f6b507779ca9467bf.jpg', 'Ear', 1, 14, 45000),
(44, 'Wear Ring', '', '29580516460279b35a5792a0686346ec3a3a9015.jpg', 'Rin', 1, 15, 50000);

-- --------------------------------------------------------

--
-- Structure de la table `categories`
--

CREATE TABLE `categories` (
  `idcateg` int(11) NOT NULL,
  `categ` varchar(40) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Déchargement des données de la table `categories`
--

INSERT INTO `categories` (`idcateg`, `categ`) VALUES
(1, 'Articles de bureau'),
(2, 'Imprimantes'),
(3, 'Meubles'),
(4, 'Ordinateurs'),
(5, 'Appareils photo'),
(6, 'Photocopieurs'),
(7, 'Toutes');

-- --------------------------------------------------------

--
-- Structure de la table `connexion`
--

CREATE TABLE `connexion` (
  `idm` int(11) NOT NULL,
  `courriel` varchar(256) COLLATE utf8_unicode_ci NOT NULL,
  `pass` varchar(12) COLLATE utf8_unicode_ci NOT NULL,
  `role` varchar(1) COLLATE utf8_unicode_ci DEFAULT 'M',
  `statut` varchar(1) COLLATE utf8_unicode_ci DEFAULT 'A'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Déchargement des données de la table `connexion`
--

INSERT INTO `connexion` (`idm`, `courriel`, `pass`, `role`, `statut`) VALUES
(1, 'admin@boutique.com', '12345', 'A', 'A'),
(1, 'negisama@hotmail.fr', '123456', 'M', 'A'),
(1, '<footer data-scroll-section>       <div class=\"footer py-4\">         <div class=\"container\">           <div class=\"row align-items-center\">             <div class=\"col-md-6 text-md-start text-center text-lg-start\">                <div class=\"footer-logo te', '123456', 'M', 'A'),
(1, '<footer data-scroll-section>       <div class=\"footer py-4\">         <div class=\"container\">           <div class=\"row align-items-center\">             <div class=\"col-md-6 text-md-start text-center text-lg-start\">                <div class=\"footer-logo te', '123456', 'M', 'A'),
(1, 'willismk@live.fr', '123456', 'M', 'A');

-- --------------------------------------------------------

--
-- Structure de la table `membres`
--

CREATE TABLE `membres` (
  `idm` int(11) NOT NULL,
  `nom` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `prenom` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `courriel` varchar(256) COLLATE utf8_unicode_ci NOT NULL,
  `sexe` varchar(1) COLLATE utf8_unicode_ci DEFAULT NULL,
  `datenaissance` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Déchargement des données de la table `membres`
--

INSERT INTO `membres` (`idm`, `nom`, `prenom`, `courriel`, `sexe`, `datenaissance`) VALUES
(1, 'Bond', 'James', 'admin@boutique.com', 'M', '1968-02-16'),
(2, 'williams', 'kemgni', 'negisama@hotmail.fr', 'F', '2023-03-08'),
(5, 'Machee', 'kemgnii', 'willismk@live.fr', 'M', '2023-03-22');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `articles`
--
ALTER TABLE `articles`
  ADD PRIMARY KEY (`ida`);

--
-- Index pour la table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`idcateg`);

--
-- Index pour la table `membres`
--
ALTER TABLE `membres`
  ADD PRIMARY KEY (`idm`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `articles`
--
ALTER TABLE `articles`
  MODIFY `ida` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=46;

--
-- AUTO_INCREMENT pour la table `categories`
--
ALTER TABLE `categories`
  MODIFY `idcateg` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT pour la table `membres`
--
ALTER TABLE `membres`
  MODIFY `idm` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
